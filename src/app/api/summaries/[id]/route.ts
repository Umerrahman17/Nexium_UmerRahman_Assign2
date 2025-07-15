import { NextRequest, NextResponse } from 'next/server';
import DatabaseService from '@/lib/database';

export async function GET(req: NextRequest, context: any) {
  const id = context.params?.id;

  if (!id) {
    return new NextResponse('Missing ID', { status: 400 });
  }

  try {
    const summary = await DatabaseService.getSummaryById(id);

    if (!summary) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(summary);
  } catch (err) {
    console.error('❌ GET Error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: any) {
  const id = context.params?.id;

  try {
    const data = await req.json();

    const updatedSummary = await DatabaseService.updateSummary(id, data);

    return NextResponse.json(updatedSummary);
  } catch (err) {
    console.error('❌ PUT Error:', err);
    return new NextResponse('Failed to update summary', { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const id = context.params?.id;

  try {
    await DatabaseService.deleteSummary(id);
    return NextResponse.json({ message: 'Summary deleted successfully' });
  } catch (err) {
    console.error('❌ DELETE Error:', err);
    return new NextResponse('Failed to delete summary', { status: 500 });
  }
}
