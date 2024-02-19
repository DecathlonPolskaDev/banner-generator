<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

	const { bannerId } = $props<{ bannerId: string }>();
</script>

<li class="mb-4 flex justify-between border-b border-b-gray-300 pb-4">
	{bannerId}
	<div class="flex gap-4">
		<button
			type="button"
			class="flex items-center gap-2 bg-red-400 px-3 py-1 text-sm text-white transition-colors hover:bg-red-600"
		>
			<Fa icon={faTrash} size="0.8x" />
			remove
		</button>
		<button
			type="button"
			class="bg-green-400 px-3 py-1 text-sm text-white transition-colors hover:bg-green-600"
		>
			load
		</button>
	</div>
</li>
