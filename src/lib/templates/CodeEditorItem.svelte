<script lang="ts">
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

	const {
		children,
		noBorder = false,
		title
	} = $props<{ children: Snippet; noBorder?: boolean; title: string }>();
	let isOpen = $state(false);
</script>

<li>
	<div class="flex items-center justify-between p-4">
		{title}
		<button type="button" class="text-blue-600" on:click={() => (isOpen = !isOpen)}>
			<Fa icon={faChevronUp} class="transition-transform {isOpen ? '' : 'rotate-180'}" />
		</button>
	</div>
	<div
		class="dropdown {isOpen ? 'isOpen' : ''}"
		class:border-b={!noBorder}
		class:border-b-gray-300={!noBorder}
	>
		<div class="overflow-hidden">
			{@render children()}
		</div>
	</div>
</li>
