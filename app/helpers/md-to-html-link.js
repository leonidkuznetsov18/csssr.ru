const linkRegExp = /\[(.*?)\]\((.*?)(\s+"(.*?)")?\)/i;

export default function mdToHtmlLink(str) {
	let cap;
	while (str) {
		cap = linkRegExp.exec(str);
		if (cap) {
			const link = `<a href="${cap[2]}" target="_blank"${cap[4] ? 'title="' + cap[4] + '"' : ''}>${cap[1]}</a>`;
			str = str.slice(0, cap.index) + link + str.slice(cap[0].length + cap.index);
			continue;
		}
		break;
	}
	return str;
}
