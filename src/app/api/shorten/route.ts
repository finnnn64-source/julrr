import { Redis } from '@upstash/redis';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body as { url: string };

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    // Generate short code
    const shortCode = nanoid(6);

    // Store in Redis
    await redis.set(`url:${shortCode}`, url);

    // Get the base URL
    const baseUrl = request.headers.get('host') || 'julrr.com';
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const shortUrl = `${protocol}://${baseUrl}/${shortCode}`;

    return NextResponse.json({ shortUrl, shortCode });
  } catch (error) {
    console.error('Error shortening URL:', error);
    return NextResponse.json({ error: 'Failed to shorten URL' }, { status: 500 });
  }
}
