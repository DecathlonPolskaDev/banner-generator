<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

	const { bannerId }: { bannerId: string } = $props();
	let isApproved: 'yes' | 'no' | 'pending' = $state('no');

	async function removeBanner() {
		if (isApproved === 'yes') {
			const reponse = await fetch(`/api/${bannerId}`, {
				method: 'DELETE'
			});
			const data = await reponse.json();

			if (data) {
				invalidateAll();
			}
		} else {
			isApproved = 'pending';

			setTimeout(() => {
				isApproved = 'yes';
			}, 3000);
		}
	}
</script>

<button
	type="button"
	class="flex items-center gap-2 px-3 py-1 text-sm text-white transition-colors enabled:bg-red-400 enabled:hover:bg-red-600 disabled:bg-red-200"
	on:click={removeBanner}
	disabled={isApproved === 'pending'}
>
	<Fa icon={faTrash} size="0.8x" />
	{#if isApproved === 'no'}
		remove
	{:else if isApproved === 'pending'}
		<div class="h-3 w-3 animate-pulse rounded-full bg-white"></div>
	{:else}
		are you sure?
	{/if}
</button>
