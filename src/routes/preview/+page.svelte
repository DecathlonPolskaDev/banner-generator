<script lang="ts">
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';

	let html = $state('');
	let css = $state('');
	let javascript = $state('');
	let closeButtonColor = $state('#ffffff');

	$effect(() => {
		window.addEventListener('message', (event) => {
			html = event.data.html;
			css = event.data.css;
			javascript = event.data.javascript;
			closeButtonColor = event.data.closeButtonColor;
		});
	});
</script>

<svelte:head>
	{#if css}
		{@html `<` + `style>${css}</style>`}
	{/if}
	{#if javascript}
		{@html `<` + `script>${javascript}</` + `script>`}
	{/if}
</svelte:head>

<div class="relative h-screen w-screen bg-white">
	<div class="absolute right-0 top-0 z-10 p-5">
		<Fa icon={faXmark} style="color: {closeButtonColor}" size="1.2x" />
	</div>
	{@html html}
</div>
