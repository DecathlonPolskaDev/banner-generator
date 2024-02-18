<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import codeStore from './codeStore.svelte';

	const { classNames = '', type } = $props<{
		classNames?: string;
		type: 'html' | 'css' | 'javascript';
	}>();

	let editor: Monaco.editor.IStandaloneCodeEditor = $state(null);
	let monaco: typeof Monaco = $state(null);
	let editorContainer: HTMLElement = $state(null);

	onMount(async () => {
		// Import our 'monaco.ts' file here
		// (onMount() will only be executed in the browser, which is what we want)
		monaco = (await import('../utils/monaco')).default;

		// Your monaco instance is ready, let's display some code!
		const editor = monaco.editor.create(editorContainer, {
			tabSize: 2,
			theme: 'vs-dark',
			minimap: {
				enabled: false
			}
		});

		const model = monaco.editor.createModel(getInitialCode(type), type);

		editor.onDidChangeModelContent(() => {
			if (type === 'html') {
				codeStore.setHTML(editor.getValue());
			} else if (type === 'css') {
				codeStore.setCSS(editor.getValue().replaceAll('@media', '@container'));
			} else if (type === 'javascript') {
				codeStore.setJavascript(editor.getValue());
			}
		});

		editor.setModel(model);
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});

	function getInitialCode(type: 'html' | 'css' | 'javascript') {
		if (type === 'html') {
			const sampleHtml = '<h1>Hello, world!</h1>';
			codeStore.setHTML(sampleHtml);
			return sampleHtml;
		}

		if (type === 'css') {
			const sampleCss = `h1 {
  color: cornflowerblue;
}`;
			codeStore.setCSS(sampleCss);
			return sampleCss;
		}

		return '';
	}
</script>

<div class={classNames} bind:this={editorContainer} />
