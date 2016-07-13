import test from 'ava';
import mdToHtmlLink from './';

test('should replace link with <a>', (t) => {
	const actual = mdToHtmlLink('[text](href)');
	t.is(actual, '<a href="href" target="_blank">text</a>');
});

test('should replace multiple links with <a>', (t) => {
	const actual = mdToHtmlLink('[text](href) [text2](href2)');
	t.is(actual, '<a href="href" target="_blank">text</a> <a href="href2" target="_blank">text2</a>');
});

test('should correct work with alt', (t) => {
	const actual = mdToHtmlLink('[text](href "title")');
	t.is(actual, '<a href="href" target="_blank" title="title">text</a>');
});
