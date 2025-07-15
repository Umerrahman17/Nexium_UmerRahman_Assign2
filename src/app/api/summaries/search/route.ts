export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma'; // ✅ use safe lazy-loaded prisma

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '10');

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    if (limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Limit must be between 1 and 100' },
        { status: 400 }
      );
    }

    const prisma = getPrisma(); // ✅ safe call inside the function

    const summaries = await prisma.blogSummary.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { summary: { contains: query, mode: 'insensitive' } },
          { urduSummary: { contains: query, mode: 'insensitive' } },
          { author: { contains: query, mode: 'insensitive' } },
          { tags: { has: query } }
        ]
      },
      take: limit,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(summaries);
  } catch (error) {
    console.error('Error searching summaries:', error);
    return NextResponse.json(
      { error: 'Failed to search summaries' },
      { status: 500 }
    );
  }
}
