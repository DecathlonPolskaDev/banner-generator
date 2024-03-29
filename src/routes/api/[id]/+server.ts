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

export async function DELETE({ params }) {
	const id = params?.id ?? '';

	const isBannerData = await kv.exists(id);

	if (!isBannerData) {
		return error(404, 'Not found');
	}

	const bannerData = await kv.del(id);

	return json(bannerData);
}

export async function POST({ params, request }) {
	const id = params?.id ?? '';
	const { html, css, javascript, closeButtonColor } = await request.json();

	if (!id || !html || !css || !closeButtonColor) {
		return error(404, 'Missing data');
	}

	const response = await kv.set(id, { html, css, javascript, closeButtonColor });

	return json(response);
}
