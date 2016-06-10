const strikeRegExp = /~/g;

export default function mdToHtmlStrike(str) {
	const strikes = str.match(strikeRegExp) || [];

	if (strikes.length > 1) {
		str = str.split('~');
		const strLength = str.length;
		return str.map((item, i) =>
			i !== 0 && i !== (strLength - 1) && i % 2 ? '<s>' + item + '</s>' : item
		).join('');
	}

	return str;
}
