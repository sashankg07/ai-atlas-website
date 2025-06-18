import { NextResponse } from 'next/server';
import { searchAndSummarizeNews } from '@/lib/openai';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const news = await searchAndSummarizeNews('AI');
    return NextResponse.json(news);
  } catch (error) {
    console.error('API Route: Error details:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
} 