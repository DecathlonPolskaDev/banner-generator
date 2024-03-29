<script lang="ts">
	import View from '$lib/atoms/View.svelte';
	import CodeEditorList from '$lib/templates/CodeEditorList.svelte';
	import StrapiCode from '$lib/atoms/StrapiCode.svelte';
	import ArchiveBannerList from '$lib/templates/ArchiveBannerList/ArchiveBannerList.svelte';
	import SaveButtons from '$lib/templates/SaveButtons.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Banner generator</title>
</svelte:head>

<div class="flex h-screen">
	<div class="flex flex-1 items-center justify-center bg-gray-300">
		<View />
	</div>
	<div class="relative w-1/3 overflow-y-scroll border-l-2 border-l-black bg-gray-200">
		<CodeEditorList />
		<StrapiCode />
		<SaveButtons values={data.archiveBannerKeys} />
		<ArchiveBannerList values={data.archiveBannerKeys} />
	</div>
</div>
