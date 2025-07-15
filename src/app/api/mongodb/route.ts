import { NextRequest, NextResponse } from 'next/server';
import { insertBlogContent } from '@/lib/mongodb';

export async function GET() {
  try {
    // Insert a hardcoded test blog
    const testData = {
      originalUrl: 'https://example.com',
      title: 'Test Blog',
      content: 'This is a test blog content.',
      author: 'Test Author',
      publishedDate: new Date(),
      wordCount: 5,
      language: 'en',
      tags: ['test', 'sample']
    };
    const result = await insertBlogContent(testData);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const result = await insertBlogContent(data);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error });
  }
} 