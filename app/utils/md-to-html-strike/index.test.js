import test from 'ava';
import mdToHtmlStrike from './';

test('should replace ~ with <s>', (t) => {
	const actual = mdToHtmlStrike('~text~');
	t.is(actual, '<s>text</s>');
});

test('should replace ~ with <s> inside text', (t) => {
	const actual = mdToHtmlStrike('some text ~text~ other text');
	t.is(actual, 'some text <s>text</s> other text');
});

test('should not replace single ~ ', (t) => {
	const actual = mdToHtmlStrike('~text');
	t.is(actual, '~text');
});

test('should replace multiple ~ with <s>', (t) => {
	const actual = mdToHtmlStrike('~text~ ~text~ ~text~ ~text~');
	t.is(actual, '<s>text</s> <s>text</s> <s>text</s> <s>text</s>');
});
