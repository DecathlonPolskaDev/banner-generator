import { kv } from '@vercel/kv';

export async function load() {
	const archiveBannerKeys = await kv.keys('*');

	return { archiveBannerKeys };
}
