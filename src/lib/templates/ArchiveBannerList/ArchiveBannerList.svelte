<script lang="ts">
	import Fa from 'svelte-fa';
	import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
	import ArchiveBannerItem from './ArchiveBannerItem.svelte';
	import { slide } from 'svelte/transition';

	const { values }: { values: string[] } = $props();

	let isOpen = $state(false);
</script>

<div class="p-5">
	<h2 class="mb-4 flex items-center justify-between border-b border-b-gray-300 pb-4 font-bold">
		Archive banners
		<button type="button" class="text-blue-600" on:click={() => (isOpen = !isOpen)}>
			<Fa icon={faChevronUp} class="transition-transform {isOpen ? '' : 'rotate-180'}" />
		</button>
	</h2>
	{#if isOpen}
		<ul transition:slide>
			{#each values as value (value)}
				<ArchiveBannerItem bannerId={value} />
			{/each}
		</ul>
	{/if}
</div>
