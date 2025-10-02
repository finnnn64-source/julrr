import { Redis } from '@upstash/redis';
import { redirect } from 'next/navigation';

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

export default async function RedirectPage({ params }: { params: { code: string } }) {
  const { code } = params;

  // If Redis is not configured, redirect to home
  if (!redis) {
    redirect('/');
  }

  // Get URL from Redis
  const url = await redis.get<string>(`url:${code}`);

  if (!url) {
    // Redirect to home if code not found
    redirect('/');
  }

  // Redirect to the original URL
  redirect(url);
}
