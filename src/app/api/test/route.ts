export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { insertBlogContent } from "@/lib/mongodb";

export async function GET() {
  const testData = {
    originalUrl: 'https://example.com/test',
    title: 'Test Blog (Test Route)',
    content: 'This is a test blog content from the test route.',
    author: 'Test Author',
    publishedDate: new Date(),
    wordCount: 7,
    language: 'en',
    tags: ['test', 'api']
  };
  try {
    const result = await insertBlogContent(testData);
    return NextResponse.json({ inserted: result });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : error });
  }
} 