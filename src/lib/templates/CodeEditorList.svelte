<script lang="ts">
	import CodeEditor from '$lib/atoms/CodeEditor.svelte';
	import codeStore from '$lib/atoms/codeStore.svelte';
	import CodeEditorItem from './CodeEditorItem.svelte';
</script>

<ul>
	<CodeEditorItem title="HTML">
		<CodeEditor classNames="h-96" type="html" />
	</CodeEditorItem>
	<CodeEditorItem title="CSS">
		<CodeEditor classNames="h-96" type="css" />
	</CodeEditorItem>
	<CodeEditorItem title="JS">
		<CodeEditor classNames="h-40" type="javascript" />
	</CodeEditorItem>
	<CodeEditorItem title="Close icon color">
		<div class="mx-4 mb-6 flex items-center">
			<code class="mr-2">{codeStore.closeButtonColor}</code>
			<input
				type="color"
				on:change={(e: Event) => {
					codeStore.setCloseButtonColor((e.target as HTMLInputElement).value);
				}}
				value={codeStore.closeButtonColor}
			/>
		</div>
	</CodeEditorItem>
	<CodeEditorItem title="Banner data id" noBorder>
		<input
			type="text"
			class="mx-4 mb-6 rounded p-2 focus:outline-none"
			on:change={(e: Event) => {
					codeStore.setBannerId((e.target as HTMLInputElement).value);
				}}
			value={codeStore.bannerId}
		/>
	</CodeEditorItem>
</ul>
