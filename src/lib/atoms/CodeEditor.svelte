<script lang="ts">
	import { onDestroy, onMount, untrack } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import codeStore from './codeStore.svelte';

	const {
		classNames = '',
		type
	}: {
		classNames?: string;
		type: 'html' | 'css' | 'javascript';
	} = $props();

	let editor: Monaco.editor.IStandaloneCodeEditor | null = $state(null);
	let monaco: typeof Monaco | null = $state(null);
	let editorContainer: HTMLElement | null = $state(null);

	function getCode(type: 'html' | 'css' | 'javascript') {
		if (type === 'html') {
			return codeStore.html;
		}

		if (type === 'css') {
			return codeStore.css;
		}

		if (type === 'javascript') {
			return codeStore.javascript;
		}

		return '';
	}

	onMount(async () => {
		monaco = (await import('../utils/monaco')).default;

		editor = monaco.editor.create(editorContainer!, {
			tabSize: 2,
			theme: 'vs-dark',
			minimap: {
				enabled: false
			}
		});

		const model = monaco.editor.createModel(getCode(type), type);

		editor.onDidChangeModelContent(() => {
			if (type === 'html') {
				codeStore.setHTML(editor!.getValue());
			} else if (type === 'css') {
				codeStore.setCSS(editor!.getValue());
			} else if (type === 'javascript') {
				codeStore.setJavascript(editor!.getValue());
			}
		});

		editor.setModel(model);
	});

	$effect(() => {
		if (codeStore.bannerId) {
			untrack(() => {
				if (editor && monaco) {
					editor.setModel(monaco.editor.createModel(getCode(type), type));
					editor!.getAction('editor.action.formatDocument')!.run();
				}
			});
		}
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div class={classNames} bind:this={editorContainer} />
