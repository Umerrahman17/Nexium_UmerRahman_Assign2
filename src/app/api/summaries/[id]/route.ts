import { NextRequest, NextResponse } from 'next/server';
import DatabaseService from '@/lib/database';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    if (!params?.id) {
      return new Response('Missing ID', { status: 400 });
    }

    const summary = await DatabaseService.getSummaryById(params.id);

    if (!summary) {
      return new Response('Not found', { status: 404 });
    }

    return Response.json(summary);
  } catch (err) {
    console.error('❌ Error fetching summary by ID:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
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
    console.error('Error updating summary:', error);
    return NextResponse.json(
      { error: 'Failed to update summary' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: 'Summary ID is required' },
        { status: 400 }
      );
    }

    await DatabaseService.deleteSummary(id);
    
    return NextResponse.json({ message: 'Summary deleted successfully' });
  } catch (error) {
    console.error('Error deleting summary:', error);
    return NextResponse.json(
      { error: 'Failed to delete summary' },
      { status: 500 }
    );
  }
} 