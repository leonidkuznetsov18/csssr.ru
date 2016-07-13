const linkRegExp = /\[(.*?)\]\((.*?)(\s+"(.*?)")?\)/ig;

export default (str) =>
	str.replace(linkRegExp, (match, text, href, _, title) =>
		`<a href="${href}" target="_blank"${title ? ' title="' + title + '"' : ''}>${text}</a>`
	);
