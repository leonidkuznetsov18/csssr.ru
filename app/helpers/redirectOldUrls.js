export default () => {
	if (/#!\/portfolio$/.test(window.location.hash)) {
		window.location = window.location.hash.replace(/#!/, '');
	}
};
