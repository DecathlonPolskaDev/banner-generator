import { initialCSS, initialHTML } from './initialCode.js';

function createCodeStore() {
	let html = $state(initialHTML);
	let css = $state(initialCSS);
	let javascript = $state('');
	let bannerId = $state('');
	let closeButtonColor = $state('#ffffff');

	return {
		get html() {
			return html;
		},
		get css() {
			return css;
		},
		get javascript() {
			return javascript;
		},
		get bannerId() {
			return bannerId;
		},
		get closeButtonColor() {
			return closeButtonColor;
		},
		setCSS: (value: string) => {
			css = value;
		},
		setHTML: (value: string) => {
			html = value;
		},
		setJavascript: (value: string) => {
			javascript = value;
		},
		setBannerId: (value: string) => {
			bannerId = value;
		},
		setCloseButtonColor: (value: string) => {
			closeButtonColor = value;
		}
	};
}

const codeStore = createCodeStore();

export default codeStore;
