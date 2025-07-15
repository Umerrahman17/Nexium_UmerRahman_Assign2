import axios from 'axios';
import * as cheerio from 'cheerio';

// Function to validate if content is actual blog content, not navigation
function isValidBlogContent(content: string): boolean {
  const lowerContent = content.toLowerCase();
  
  // Check for navigation patterns that indicate this is not blog content
  const navigationPatterns = [
    'tutorial', 'learn', 'reference', 'overview', 'filter', 'input', 'menu', 'navigation',
    'sidebar', 'header', 'footer', 'search', 'login', 'signup', 'subscribe', 'follow',
    'share', 'like', 'comment', 'ad', 'sponsored', 'promoted', 'css', 'sets', 'data',
    'analytics', 'generative', 'create', 'server', 'new', 'where', 'start', 'web',
    'templates', 'statistics', 'certificates', 'development', 'introduction', 'programming',
    'code', 'editor', 'test', 'your', 'typing', 'speed', 'play', 'game', 'cyber',
    'security', 'accessibility', 'join', 'our', 'newsletter', 'javascript', 'backend',
    'django', 'exercise', 'excercise', 'html', 'bootstrap', 'quiz', 'numpy', 'pandas',
    'scipy', 'excel', 'what', 'certificate', 'course', 'programs', 'full', 'access',
    'best', 'value', 'examples', 'dom', 'objects', 'events', 'browser', 'website',
    'syllabus', 'study', 'plan', 'interview', 'prep', 'bootcamp', 'arrow', 'function',
    'previous', 'next', 'try', 'yourself'
  ];
  
  // Count how many navigation patterns are found
  const navigationCount = navigationPatterns.filter(pattern => 
    lowerContent.includes(pattern)
  ).length;
  
  // If too many navigation patterns, it's likely not blog content
  if (navigationCount > 5) {
    return false;
  }
  
  // Check for actual content indicators
  const contentIndicators = [
    'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'has', 'have', 'had', 'will', 'would', 'could',
    'should', 'may', 'might', 'can', 'do', 'does', 'did'
  ];
  
  const contentCount = contentIndicators.filter(word => 
    lowerContent.includes(word)
  ).length;
  
  // Must have reasonable amount of content words
  if (contentCount < 10) {
    return false;
  }
  
  // Check for sentence structure (should have periods and proper capitalization)
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
  if (sentences.length < 2) {
    return false;
  }
  
  // Check that sentences start with capital letters
  const properSentences = sentences.filter(s => 
    /^[A-Z]/.test(s.trim())
  );
  
  if (properSentences.length < sentences.length * 0.5) {
    return false;
  }
  
  return true;
}

export interface ScrapedContent {
  title: string;
  content: string;
  author?: string;
  publishedDate?: Date;
  wordCount: number;
}

export async function scrapeBlog(url: string): Promise<ScrapedContent> {
  try {
    console.log('🔍 Attempting to scrape:', url);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0'
      },
      timeout: 20000, // Increased timeout
      maxRedirects: 10, // Increased redirects
      validateStatus: (status) => status < 500 // Accept 4xx status codes to handle them gracefully
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.keys(response.headers));

    // Check if we got a successful response
    if (response.status === 404) {
      throw new Error('Page not found (404). Please check if the URL is correct.');
    }
    
    if (response.status === 403) {
      throw new Error('Access forbidden (403). This website may block automated requests.');
    }
    
    if (response.status >= 400) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const $ = cheerio.load(response.data);
    
    // Extract title with more fallbacks
    const title = $('title').text() || 
                  $('h1').first().text() || 
                  $('h2').first().text() ||
                  $('meta[property="og:title"]').attr('content') || 
                  $('meta[name="twitter:title"]').attr('content') ||
                  $('meta[name="title"]').attr('content') ||
                  'Untitled';

    // Extract content - try multiple selectors with more options
    let content = '';
    
    // More specific content selectors that target actual blog content
    const contentSelectors = [
      'article .post-content',
      'article .entry-content',
      'article .blog-content',
      'article .content',
      'article .post-body',
      'article .article-content',
      'article .story-content',
      'article .post-text',
      'article .blog-post',
      'article .article-body',
      'article .text-content',
      'article .body-content',
      'article .page-content',
      '.post-content',
      '.entry-content',
      '.blog-content',
      '.content',
      '.post-body',
      '.article-content',
      '.story-content',
      '.post-text',
      '.blog-post',
      '.article-body',
      '.text-content',
      '.body-content',
      '.page-content',
      'main',
      'article',
      'section',
      '.main-content',
      '.post',
      '.article',
      '.entry',
      '.story'
    ];

    for (const selector of contentSelectors) {
      const element = $(selector);
      if (element.length > 0) {
        // Remove unwanted elements more comprehensively
        element.find('script, style, nav, header, footer, .sidebar, .comments, .advertisement, .ads, .ad, .social-share, .share, .related, .recommended, .newsletter, .subscribe, .popup, .modal, .overlay, .menu, .navigation, .breadcrumb, .pagination, .tags, .categories, .author-bio, .bio, .avatar, .profile, .user-info, .meta, .metadata, .info, .details, .stats, .metrics, .views, .likes, .shares, .bookmarks, .follow, .subscribe, .signup, .login, .button, .btn, .link, .external-link, .cta, .call-to-action').remove();
        content = element.text().trim();
        
        // Validate that this is actual blog content, not navigation
        if (content.length > 100 && isValidBlogContent(content)) {
          console.log('✅ Found valid blog content using selector:', selector);
          break;
        }
      }
    }

    // If no content found, try to get all text from body
    if (!content || content.length < 100) {
      const body = $('body');
      body.find('script, style, nav, header, footer, .sidebar, .comments, .advertisement, .ads, .ad, .social-share, .share, .related, .recommended, .newsletter, .subscribe, .popup, .modal, .overlay, .menu, .navigation, .breadcrumb, .pagination, .tags, .categories, .author-bio, .bio, .avatar, .profile, .user-info, .meta, .metadata, .info, .details, .stats, .metrics, .views, .likes, .shares, .bookmarks, .follow, .subscribe, .signup, .login, .button, .btn, .link, .external-link, .cta, .call-to-action').remove();
      const bodyContent = body.text().trim();
      if (bodyContent.length > 100 && isValidBlogContent(bodyContent)) {
        content = bodyContent;
        console.log('⚠️ Using validated body text as fallback');
      }
    }

    // If still no content, try p tags with validation
    if (!content || content.length < 100) {
      const paragraphs = $('p').map((i, el) => $(el).text().trim()).get().join(' ');
      if (paragraphs.length > 100 && isValidBlogContent(paragraphs)) {
        content = paragraphs;
        console.log('⚠️ Using validated paragraph text as fallback');
      }
    }

    // Clean up content more thoroughly
    content = content
      .replace(/<[^>]*>/g, ' ') // Remove any remaining HTML tags
      .replace(/&[a-zA-Z]+;/g, ' ') // Remove HTML entities
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .replace(/\t+/g, ' ') // Replace tabs with spaces
      .replace(/\s+([.,!?;:])/g, '$1') // Remove spaces before punctuation
      .replace(/([.,!?;:])\s*/g, '$1 ') // Ensure proper spacing after punctuation
      .replace(/\s+/g, ' ') // Final space normalization
      .trim();

    // Extract author with more selectors
    const author = $('meta[name="author"]').attr('content') ||
                   $('.author').text() ||
                   $('[rel="author"]').text() ||
                   $('.byline').text() ||
                   $('.post-author').text() ||
                   $('.article-author').text() ||
                   $('.writer').text() ||
                   $('[class*="author"]').text() ||
                   undefined;

    // Extract published date with more selectors
    const publishedDate = $('meta[property="article:published_time"]').attr('content') ||
                         $('meta[name="publish_date"]').attr('content') ||
                         $('meta[name="date"]').attr('content') ||
                         $('time[datetime]').attr('datetime') ||
                         $('.published-date').text() ||
                         $('.post-date').text() ||
                         $('.article-date').text() ||
                         $('[class*="date"]').text() ||
                         undefined;

    // Calculate word count
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;

    console.log('📊 Scraped data:', {
      titleLength: title.length,
      contentLength: content.length,
      wordCount,
      hasAuthor: !!author,
      hasDate: !!publishedDate
    });

    // If content is still too short, use title as content
    if (content.length < 10) {
      content = title;
      console.log('⚠️ Using title as content due to insufficient content');
    }

    return {
      title: title.trim(),
      content: content,
      author: author?.trim(),
      publishedDate: publishedDate ? new Date(publishedDate) : undefined,
      wordCount: Math.max(wordCount, 1) // Ensure at least 1 word
    };
  } catch (error) {
    console.error('❌ Scraping error:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const statusText = error.response.statusText;
        
        if (status === 404) {
          throw new Error('Page not found (404). Please check if the URL is correct and the page exists.');
        } else if (status === 403) {
          throw new Error('Access forbidden (403). This website may block automated requests. Try a different URL.');
        } else if (status === 429) {
          throw new Error('Too many requests (429). Please wait a moment and try again.');
        } else if (status >= 500) {
          throw new Error(`Server error (${status}). The website might be temporarily unavailable.`);
        } else {
          throw new Error(`HTTP ${status}: ${statusText}. Please try a different URL.`);
        }
      } else if (error.request) {
        // Request was made but no response received
        if (error.code === 'ENOTFOUND') {
          throw new Error('Could not reach the website. Please check the URL and your internet connection.');
        } else if (error.code === 'ECONNREFUSED') {
          throw new Error('Connection refused. The website might be down or blocking requests.');
        } else if (error.code === 'ETIMEDOUT') {
          throw new Error('Request timed out. The website might be slow or unavailable.');
        } else {
          throw new Error(`Network error: ${error.message}. Please try again.`);
        }
      }
    }
    
    throw new Error(`Failed to scrape blog: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 