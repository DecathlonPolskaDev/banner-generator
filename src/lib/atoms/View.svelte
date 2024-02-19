<script lang="ts">
	import codeStore from '$lib/atoms/codeStore.svelte';
	import RotateDeviceIcon from './RotateDeviceIcon.svelte';

	let sizes = $state([375, 667]);
	let selectedDevice = $state('iphone-se');
	let preview: HTMLIFrameElement | undefined = $state();

	$effect(() => {
		if (codeStore.html) {
			preview?.contentWindow?.postMessage(
				{
					type: 'update',
					html: codeStore.html,
					css: codeStore.css,
					javascript: codeStore.javascript,
					closeButtonColor: codeStore.closeButtonColor
				},
				'*'
			);
		}
	});

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
</script>

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
			on:click={sizes.reverse}
		>
			<RotateDeviceIcon />
		</button>
	</div>
	<iframe width={sizes[0]} height={sizes[1]} src="/preview" title="preview" bind:this={preview} />
</div>
