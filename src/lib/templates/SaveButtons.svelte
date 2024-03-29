<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
	import codeStore from '$lib/atoms/codeStore.svelte';

	const { values }: { values: string[] } = $props();

	let isSaved = $derived(values.includes(codeStore.bannerId));

	async function saveBanner() {
		const response = await fetch(`/api/${codeStore.bannerId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				html: codeStore.html,
				css: codeStore.css,
				javascript: codeStore.javascript,
				closeButtonColor: codeStore.closeButtonColor
			})
		});
		const data = await response.json();

		if (data) {
			invalidateAll();
		}
	}
</script>

<div class="px-4">
	<button
		type="button"
		class="flex w-full items-center justify-center rounded p-2 text-white transition-colors enabled:bg-green-600 enabled:hover:bg-black disabled:bg-gray-400"
		disabled={codeStore.bannerId === ''}
		on:click={saveBanner}
	>
		<Fa icon={faFloppyDisk} class="mr-3" />
		{#if isSaved}
			Update
		{:else}
			Save
		{/if}
	</button>
</div>
