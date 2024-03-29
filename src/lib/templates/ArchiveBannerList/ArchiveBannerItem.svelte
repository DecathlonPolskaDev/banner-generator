<script lang="ts">
	import codeStore from '$lib/atoms/codeStore.svelte';
	import RemoveItem from './RemoveItem.svelte';

	const { bannerId }: { bannerId: string } = $props();

	async function loadBanner() {
		const response = await fetch(`/api/${bannerId}`);
		const bannerData = await response.json();

		if (bannerData) {
			codeStore.setHTML((bannerData.html || '').replaceAll('\\"', '"'));
			codeStore.setCSS((bannerData.css || '').replaceAll('\\"', '"'));
			codeStore.setJavascript((bannerData.javascript || '').replaceAll('\\"', '"'));
			codeStore.setCloseButtonColor(bannerData.closeButtonColor);
			codeStore.setBannerId(bannerId);
		}
	}
</script>

<li class="mb-4 flex justify-between border-b border-b-gray-300 pb-4">
	{bannerId}
	<div class="flex gap-4">
		<RemoveItem {bannerId} />
		<button
			type="button"
			class="bg-green-400 px-3 py-1 text-sm text-white transition-colors hover:bg-green-600"
			on:click={loadBanner}
		>
			load
		</button>
	</div>
</li>
