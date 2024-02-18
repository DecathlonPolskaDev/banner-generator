<script lang="ts">
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import codeStore from '$lib/atoms/codeStore.svelte';
	import RotateDeviceIcon from './RotateDeviceIcon.svelte';

	let sizes = $state([375, 667]);
	let selectedDevice = $state('iphone-se');

	function deviceChange(event: Event) {
		const select = event.target as HTMLSelectElement;
		const value = select.value;

		if (value === 'iphone-se') {
			sizes = [375, 667];
			selectedDevice = 'iphone-se';
		} else if (value === 'iphone-14-pro-max') {
			sizes = [430, 932];
			selectedDevice = 'iphone-14-pro-max';
		} else if (value === 'ipad-mini') {
			sizes = [768, 1024];
			selectedDevice = 'ipad-mini';
		} else if (value === 'ipad-air') {
			sizes = [820, 1180];
			selectedDevice = 'ipad-air';
		}
	}

	const swapSizes = () => {
		sizes.reverse();
	};
</script>

<svelte:head>
	{#if codeStore.css}
		{@html `<` + `style id="DUPA">${codeStore.css}</style>`}
	{/if}
	{#if codeStore.javascript}
		{@html `<` + `script>${codeStore.javascript}</` + `script>`}
	{/if}
</svelte:head>

<div>
	<div class="mb-3 flex items-center justify-center gap-3">
		<div>{sizes[0]} x {sizes[1]}</div>
		<div>
			<select on:change={deviceChange} class="rounded p-2">
				<option value="iphone-se" selected={selectedDevice === 'iphone-se'}>iPhone SE</option>
				<option value="iphone-14-pro-max" selected={selectedDevice === 'iphone-14-pro-max'}>
					iPhone 14 Pro Max
				</option>
				<option value="ipad-mini" selected={selectedDevice === 'ipad-mini'}>iPad Mini</option>
				<option value="ipad-air" selected={selectedDevice === 'ipad-air'}>iPad Air</option>
			</select>
		</div>
		<button
			type="button"
			class="flex h-9 w-9 items-center justify-center rounded bg-white"
			on:click={swapSizes}
		>
			<RotateDeviceIcon />
		</button>
	</div>
	<div
		style="width: {sizes[0]}px; height: {sizes[1]}px; container-type: inline-size"
		class="relative overflow-clip bg-white"
	>
		<div class="absolute right-0 top-0 z-10 p-5">
			<Fa icon={faXmark} style="color: {codeStore.closeButtonColor}" size="1.2x" />
		</div>
		{@html codeStore.html}
	</div>
</div>
