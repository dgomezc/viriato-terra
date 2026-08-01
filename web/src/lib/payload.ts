export type PageStatus = 'draft' | 'published';

export type PageRecord = {
  id: string;
  title: string;
  slug: string;
  _status?: PageStatus;
  updatedAt?: string;
};

const payloadUrl = (import.meta.env.PUBLIC_PAYLOAD_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export async function getPageBySlug(slug: string): Promise<PageRecord | null> {
  const url = new URL(`${payloadUrl}/api/pages`);
  url.searchParams.set('where[slug][equals]', slug);
  url.searchParams.set('where[_status][equals]', 'published');
  url.searchParams.set('limit', '1');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Payload respondió ${response.status}`);
  }

  const data = (await response.json()) as { docs?: PageRecord[] };
  return data.docs?.[0] ?? null;
}

export function payloadPublicUrl(path: string): string {
  return `${payloadUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
