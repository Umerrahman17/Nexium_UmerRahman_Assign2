export const dynamic = "force-dynamic";

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

    // Check if blog already exists in DB
    const existing = await DatabaseService.getBlogWithSummary(url);
    if (existing.blogContent) {
      return NextResponse.json({
        title: existing.blogContent.title,
        wordCount: existing.blogContent.wordCount,
        author: existing.blogContent.author,
        summary: existing.summary?.summary,
        urduSummary: existing.summary?.urduSummary,
        id: existing.summary?.id,
        mongoId: existing.blogContent._id,
        databaseStatus: 'already_exists',
        savedToDatabase: true,
        message: 'Blog already exists in the database.'
      });
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

    // Check if summary is an error message
    let urduSummary = '';
    if (summary.startsWith('ERROR:')) {
      // Handle error messages specially
      const errorMessage = summary.replace('ERROR: ', '');
      urduSummary = translateToUrdu(errorMessage);
    } else {
      // Normal summary translation
      urduSummary = translateToUrdu(summary);
    }

    // Save to both databases
    let summaryId = null;
    let mongoId = null;
    let databaseStatus = 'not_available';

    try {
      // Prepare data for both databases
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

      // Try to save to both databases
      try {
        const result = await DatabaseService.saveBlogWithSummary(blogData, summaryData);
        summaryId = result.summaryId;
        mongoId = result.mongoId;
        databaseStatus = 'both';
        console.log('✅ Data saved to both databases - Summary ID:', summaryId, 'MongoDB ID:', mongoId);
      } catch (combinedError) {
        console.error('❌ Combined save failed, trying Supabase only:', combinedError);
        // Fallback to Supabase only
        try {
          summaryId = await DatabaseService.saveSummary(summaryData);
          databaseStatus = 'supabase';
          console.log('✅ Summary saved to Supabase with ID:', summaryId);
        } catch (supabaseError) {
          console.error('❌ Supabase save failed:', supabaseError);
          databaseStatus = 'not_available';
        }
      }
    } catch (dbError) {
      console.error('❌ Database save failed:', dbError);
    }

    return NextResponse.json({
      title: scrapedContent.title,
      wordCount: scrapedContent.wordCount,
      author: scrapedContent.author,
      summary: summary,
      urduSummary: urduSummary,
      id: summaryId,
      mongoId: mongoId,
      databaseStatus: databaseStatus,
      savedToDatabase: databaseStatus !== 'not_available',
    });

  } catch (error) {
    console.error('Error processing blog:', error);
    // Provide more specific error messages based on the error
    if (error instanceof Error) {
      const message = error.message.toLowerCase();
      // Scraping errors
      if (message.includes('page not found') || message.includes('404')) {
        return NextResponse.json(
          { error: 'Page not found (404). Please check if the URL is correct and the page exists.' },
          { status: 400 }
        );
      }
      if (message.includes('access forbidden') || message.includes('403')) {
        return NextResponse.json(
          { error: 'Access forbidden (403). This website may block automated requests.' },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { error: 'Failed to process blog.' },
      { status: 500 }
    );
  }
} 