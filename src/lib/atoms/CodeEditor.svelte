<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import codeStore from './codeStore.svelte';

	const { classNames = '', type } = $props<{
		classNames?: string;
		type: 'html' | 'css' | 'javascript';
	}>();

	let editor: Monaco.editor.IStandaloneCodeEditor | null = $state(null);
	let monaco: typeof Monaco | null = $state(null);
	let editorContainer: HTMLElement | null = $state(null);

	onMount(async () => {
		// Import our 'monaco.ts' file here
		// (onMount() will only be executed in the browser, which is what we want)
		monaco = (await import('../utils/monaco')).default;

		// Your monaco instance is ready, let's display some code!
		const editor = monaco.editor.create(editorContainer!, {
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
				codeStore.setCSS(editor.getValue());
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
			const sampleHtml = `<div class="banner-wrapper">
  <div class="content">
    Content
  </div>
  <footer>
    <div class="terms">*Regulamin promocji dostępny na decathlon.pl</div>
    <a
      href="https://www.decathlon.pl/"
    >
      Pobierz aplikację
    </a>
  </footer>
</div>`;
			codeStore.setHTML(sampleHtml);
			return sampleHtml;
		}

		if (type === 'css') {
			const sampleCss = `.banner-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  background-color: #333;
  text-align: center;
}

.banner-wrapper .content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 385px;
}

.banner-wrapper footer {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 10px;
  position: relative;
  z-index: 10;
}

.banner-wrapper .terms {
  text-transform: uppercase;
}

.banner-wrapper footer a {
  display: block;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  padding: 12px 20px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  color: #131313;
  text-decoration: none;
}

@media (max-width: 1000px) and (orientation: landscape) {
  .banner-wrapper .content .info {
    margin: 0 0 40px 35%;
  }
}

@media (min-width: 600px) {
  .banner-wrapper footer a {
    display: inline-block;
    width: unset;
    min-width: 345px;
    margin-bottom: 60px;
  }
}

@media (min-width: 600px) {
  .banner-wrapper footer a {
    margin-bottom: 0;
  }
}

@media (min-width: 1000px) and (orientation: landscape) {
}`;
			codeStore.setCSS(sampleCss);
			return sampleCss;
		}

		return '';
	}
</script>

<div class={classNames} bind:this={editorContainer} />
