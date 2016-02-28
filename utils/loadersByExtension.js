function extsToRegExp(exts) {
	return new RegExp('\\.(' + exts.map(function (ext) {
		return ext.replace(/\./g, '\\.');
	}).join('|') + ')(\\?.*)?$');
}

export default function loadersByExtension(obj) {
	const loaders = [];
	let extensions;

	extensions = Object.keys(obj).map((key) => key.split('|'));
	extensions = extensions.reduce((acc, item) => acc.concat(item), []);

	Object.keys(obj).forEach(function (key) {
		const exts = key.split('|');
		const value = obj[key];
		const entry = {
			extensions: exts,
			test: extsToRegExp(exts),
			loaders: value,
		};

		if (Array.isArray(value)) {
			entry.loaders = value;
		} else if (typeof value === 'string') {
			entry.loader = value;
		} else {
			Object.keys(value).forEach(function (property) {
				entry[property] = value[property];
			});
		}

		loaders.push(entry);
	});

	return loaders;
}
