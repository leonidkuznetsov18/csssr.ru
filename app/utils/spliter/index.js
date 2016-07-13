export default (string, arr) =>
	arr.concat(Infinity).reduce((acc, item, index) =>
		acc.concat(' ', string.slice(acc.length - index, acc.length - index + item))
	, '').trim();
