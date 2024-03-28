import { error, json } from '@sveltejs/kit';
import { kv } from '@vercel/kv';

export async function GET({ params }) {
	const id = params?.id ?? '';

	const isBannerData = await kv.exists(id);

	if (!isBannerData) {
		return error(404, 'Not found');
	}

	const bannerData = await kv.get(id);

	return json(bannerData);
}
