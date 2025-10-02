import { kv } from '@vercel/kv';
import { redirect } from 'next/navigation';

export default async function RedirectPage({ params }: { params: { code: string } }) {
  const { code } = params;

  // Get URL from KV
  const url = await kv.get<string>(`url:${code}`);

  if (!url) {
    // Redirect to home if code not found
    redirect('/');
  }

  // Redirect to the original URL
  redirect(url);
}
