import { NextRequest, NextResponse } from 'next/server';
import DatabaseService from '@/lib/database';

// ✅ GET /api/summaries/[id]
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return new NextResponse('Missing ID', { status: 400 });
    }

    const summary = await DatabaseService.getSummaryById(id);

    if (!summary) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(summary);
  } catch (err) {
    console.error('❌ Error fetching summary by ID:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// ✅ PUT /api/summaries/[id]
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const updateData = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Summary ID is required' },
        { status: 400 }
      );
    }

    const updatedSummary = await DatabaseService.updateSummary(id, updateData);

    return NextResponse.json(updatedSummary);
  } catch (error) {
    console.error('❌ Error updating summary:', error);
    return NextResponse.json(
      { error: 'Failed to update summary' },
      { status: 500 }
    );
  }
}

// ✅ DELETE /api/summaries/[id]
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return NextResponse.json(
        { error: 'Summary ID is required' },
        { status: 400 }
      );
    }

    await DatabaseService.deleteSummary(id);

    return NextResponse.json({ message: 'Summary deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting summary:', error);
    return NextResponse.json(
      { error: 'Failed to delete summary' },
      { status: 500 }
    );
  }
}
