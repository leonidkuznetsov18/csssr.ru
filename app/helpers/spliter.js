export default function spliter(string, arr) {
	let result = '';
	let prevLen = 0;
	for (const len of arr) {
		result += ` ${string.slice(prevLen, prevLen + len)}`;
		prevLen += len;
	}
	return result.trim();
}
