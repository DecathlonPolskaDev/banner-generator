function createCodeStore() {
	let html = $state('');
	let css = $state('');
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
