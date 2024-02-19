<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<ul class="mx-5 flex gap-5">
	<li class="flex-1">
		<button
			type="button"
			class="flex w-full items-center justify-center rounded bg-gray-300 p-2 transition-colors hover:bg-black hover:text-white"
		>
			<Fa icon={faPlus} class="mr-3" />
			Add new
		</button>
	</li>
	<li class="flex-1">
		<button
			type="button"
			class="flex w-full items-center justify-center rounded bg-green-600 p-2 text-white transition-colors hover:bg-black"
		>
			<Fa icon={faFloppyDisk} class="mr-3" />
			Save
		</button>
	</li>
</ul>
