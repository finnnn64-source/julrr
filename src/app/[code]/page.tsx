import { Redis } from '@upstash/redis';
import { redirect } from 'next/navigation';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function RedirectPage({ params }: { params: { code: string } }) {
  const { code } = params;

  // Get URL from Redis
  const url = await redis.get<string>(`url:${code}`);

  if (!url) {
    // Redirect to home if code not found
    redirect('/');
  }

  // Redirect to the original URL
  redirect(url);
}
