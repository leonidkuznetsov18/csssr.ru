import * as meta from '../data/meta.js';

export default function(url) {
	url = url.slice(1);
	url = url || 'index';
	url = url.replace(/([/-][a-z])/g, ($1) => $1[1].toUpperCase());

	if (parseInt(url[0])) {
		url = 'status' + url;
	}

	return meta[url] || meta.status404;
}