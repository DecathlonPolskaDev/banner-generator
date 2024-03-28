<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCopy, faXmark } from '@fortawesome/free-solid-svg-icons';
	import codeStore from './codeStore.svelte';

	let dialog: HTMLDialogElement | undefined = $state();
	let textarea: HTMLTextAreaElement | undefined = $state();
	let value = $state('');

	function onShowDialog() {
		dialog!.showModal();

		value = `{
  "css": "${codeStore.css.replaceAll(/\n\ */gi, ' ').replaceAll('"', '\\"')}",
  "html": "${codeStore.html.replaceAll(/\n\ */gi, ' ').replaceAll('"', '\\"')}",
	"javascript": "${codeStore.javascript.replaceAll(/\n\ */gi, ' ').replaceAll('"', '\\"')}",
  "bannerId": "${codeStore.bannerId}",
  "closeButtonColor": "${codeStore.closeButtonColor}"
}`;
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(value);
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

<dialog bind:this={dialog} class="rounded px-5 pb-28 pt-12 backdrop:bg-black backdrop:opacity-80">
	<button type="button" class="absolute right-0 top-0 z-10 p-5" on:click={() => dialog!.close()}>
		<Fa icon={faXmark} size="1.2x" />
	</button>
	<textarea
		bind:this={textarea}
		class="block w-[1200px] whitespace-nowrap bg-white focus:outline-none"
		rows="7"
		{value}
	/>
	<button
		type="button"
		class="absolute bottom-5 right-5 z-10 rounded bg-blue-600 p-5 text-white transition-colors hover:bg-black"
		on:click={copyToClipboard}
	>
		<Fa icon={faCopy} size="2x" />
	</button>
</dialog>
