const UA = window.navigator.userAgent;

export default {
	isIE: () => UA.indexOf('MSIE') >= 0 || !!UA.match(/Trident\/7\./),
};
