import { NextRequest, NextResponse } from 'next/server';
import { scrapeBlog } from '@/lib/scraper';
import { generateSummary } from '@/lib/summarizer';
import { translateToUrdu } from '@/lib/urduDictionary';
import DatabaseService from '@/lib/database';

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

    try {
      // Prepare blog data
      const blogData = {
        originalUrl: url,
        title: scrapedContent.title,
        content: scrapedContent.content,
        author: scrapedContent.author,
        publishedDate: scrapedContent.publishedDate,
        wordCount: scrapedContent.wordCount,
        language: 'en',
        tags: []
      };

      // Prepare summary data
      const summaryData = {
        originalUrl: url,
        title: scrapedContent.title,
        summary: summary,
        urduSummary: urduSummary,
        wordCount: summary.split(' ').length,
        language: 'en',
        tags: [],
        author: scrapedContent.author,
        publishedDate: scrapedContent.publishedDate
      };

      // Save to both databases
      const result = await DatabaseService.saveBlogWithSummary(blogData, summaryData);
      mongoId = result.mongoId;
      summaryId = result.summaryId;
      databaseStatus = 'both';
    } catch (dbError) {
      console.warn('Database connection failed:', dbError);
      databaseStatus = 'not_available';
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