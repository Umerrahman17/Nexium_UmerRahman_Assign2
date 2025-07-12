import axios from 'axios';
import * as cheerio from 'cheerio';

export interface ScrapedContent {
  title: string;
  content: string;
  author?: string;
  publishedDate?: Date;
  wordCount: number;
}

export async function scrapeBlog(url: string): Promise<ScrapedContent> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    });

    const $ = cheerio.load(response.data);
    
    // Extract title
    const title = $('title').text() || 
                  $('h1').first().text() || 
                  $('meta[property="og:title"]').attr('content') || 
                  'Untitled';

    // Extract content - try multiple selectors
    let content = '';
    
    // Common blog content selectors
    const contentSelectors = [
      'article',
      '.post-content',
      '.entry-content',
      '.blog-content',
      '.content',
      'main',
      '.post-body',
      '.article-content'
    ];

    for (const selector of contentSelectors) {
      const element = $(selector);
      if (element.length > 0) {
        content = element.text().trim();
        break;
      }
    }

    // If no content found, try to get all text from body
    if (!content) {
      content = $('body').text().trim();
    }

    // Extract author
    const author = $('meta[name="author"]').attr('content') ||
                   $('.author').text() ||
                   $('[rel="author"]').text() ||
                   undefined;

    // Extract published date
    const publishedDate = $('meta[property="article:published_time"]').attr('content') ||
                         $('time[datetime]').attr('datetime') ||
                         undefined;

    // Calculate word count
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;

    return {
      title: title.trim(),
      content: content,
      author: author?.trim(),
      publishedDate: publishedDate ? new Date(publishedDate) : undefined,
      wordCount
    };
  } catch (error) {
    throw new Error(`Failed to scrape blog: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 