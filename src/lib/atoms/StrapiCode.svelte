<script lang="ts">
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import codeStore from './codeStore.svelte';

	let dialog: HTMLDialogElement | undefined = $state();
	let value = $state('');

	function onShowDialog() {
		dialog!.showModal();

		value = `{
  "css": "${codeStore.css.replaceAll('\n', '').replaceAll('"', '\\"')}",
  "html": "${codeStore.html.replaceAll('\n', '').replaceAll('"', '\\"')}",
  "bannerId": "${codeStore.bannerId}",
  "closeButtonColor": "${codeStore.closeButtonColor}"
}`;
	}
</script>

<div class="p-4">
	<button
		type="button"
		class="block w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-black"
		on:click={onShowDialog}
	>
		Get Strapi code
	</button>
</div>

<dialog bind:this={dialog} class=" rounded p-5 backdrop:bg-black backdrop:opacity-80">
	<button type="button" class="absolute right-0 top-0 z-10 p-5" on:click={() => dialog!.close()}>
		<Fa icon={faXmark} size="1.2x" />
	</button>
	<textarea class="mt-8 block h-[200px] w-[1200px] bg-white" {value} />
</dialog>
