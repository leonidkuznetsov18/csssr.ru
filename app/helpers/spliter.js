export default function spliter(string, arr) {
	let result = '';
	let prevLen = 0;
	for (let i = 0, l = arr.length; i <= l; i++) {
		const len = arr[i] || Infinity;
		result += ` ${string.slice(prevLen, prevLen + len)}`;
		prevLen += len;
	}
	return result.trim();
}
