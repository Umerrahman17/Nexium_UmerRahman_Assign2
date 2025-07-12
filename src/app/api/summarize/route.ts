import { NextRequest, NextResponse } from 'next/server';
import { scrapeBlog } from '@/lib/scraper';
import { generateSummary } from '@/lib/summarizer';
import { translateToUrdu } from '@/lib/urduDictionary';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
      if (!parsedUrl.protocol.startsWith('http')) {
        return NextResponse.json(
          { error: 'URL must start with http:// or https://' },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format. Please enter a valid URL like https://example.com' },
        { status: 400 }
      );
    }

    // Scrape the blog content
    const scrapedContent = await scrapeBlog(url);

    // Generate AI summary
    const summary = generateSummary(scrapedContent.content);

    // Translate to Urdu
    const urduSummary = translateToUrdu(summary);

    // Try to save to databases (optional - won't fail if databases are not available)
    let mongoId = null;
    let summaryId = null;
    let databaseStatus = 'not_available';

    // Try to save to MongoDB
    try {
      const { default: connectDB } = await import('@/lib/mongodb');
      const { default: BlogContent } = await import('@/lib/models/BlogContent');
      
      await connectDB();
      const blogContent = new BlogContent({
        originalUrl: url,
        title: scrapedContent.title,
        content: scrapedContent.content,
        author: scrapedContent.author,
        publishedDate: scrapedContent.publishedDate,
        wordCount: scrapedContent.wordCount,
      });
      await blogContent.save();
      mongoId = blogContent._id.toString();
      databaseStatus = 'mongodb_only';
    } catch (dbError) {
      console.warn('MongoDB connection failed:', dbError);
    }

    // Try to save to PostgreSQL
    try {
      const { prisma } = await import('@/lib/prisma');
      
      const blogSummary = await prisma.blogSummary.create({
        data: {
          originalUrl: url,
          title: scrapedContent.title,
          summary: summary,
          urduSummary: urduSummary,
          mongoId: mongoId,
        },
      });
      summaryId = blogSummary.id;
      databaseStatus = mongoId ? 'both' : 'postgresql_only';
    } catch (dbError) {
      console.warn('PostgreSQL connection failed:', dbError);
      if (databaseStatus === 'mongodb_only') {
        databaseStatus = 'mongodb_only';
      } else {
        databaseStatus = 'not_available';
      }
    }

    return NextResponse.json({
      title: scrapedContent.title,
      wordCount: scrapedContent.wordCount,
      author: scrapedContent.author,
      summary: summary,
      urduSummary: urduSummary,
      id: summaryId,
      databaseStatus: databaseStatus,
      savedToDatabase: databaseStatus !== 'not_available',
    });

  } catch (error) {
    console.error('Error processing blog:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('ENOTFOUND')) {
        return NextResponse.json(
          { error: 'Could not reach the website. Please check the URL and try again.' },
          { status: 400 }
        );
      }
      if (error.message.includes('timeout')) {
        return NextResponse.json(
          { error: 'Request timed out. The website might be slow or unavailable.' },
          { status: 408 }
        );
      }
      if (error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'Database connection failed, but summary was generated successfully.' },
          { status: 200 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to process blog. Please try again with a different URL.' },
      { status: 500 }
    );
  }
} 