import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// ✅ Correct type for context with params
type Context = {
  params: {
    id: string;
  };
};

// ✅ GET summary by ID
export async function GET(_req: NextRequest, context: Context) {
  const { id } = context.params;

  if (!id) {
    return new NextResponse('Missing ID', { status: 400 });
  }

  try {
    const summary = await prisma.blogSummary.findUnique({
      where: { id },
    });

    if (!summary) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(summary);
  } catch (error) {
    console.error('GET /api/summaries/[id] error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// ✅ DELETE summary by ID
export async function DELETE(_req: NextRequest, context: Context) {
  const { id } = context.params;

  try {
    await prisma.blogSummary.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/summaries/[id] error:', error);
    return new NextResponse('Failed to delete summary', { status: 500 });
  }
}

// ✅ PUT update summary by ID
export async function PUT(req: NextRequest, context: Context) {
  const { id } = context.params;
  const body = await req.json();

  try {
    const updated = await prisma.blogSummary.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT /api/summaries/[id] error:', error);
    return new NextResponse('Failed to update summary', { status: 500 });
  }
}
