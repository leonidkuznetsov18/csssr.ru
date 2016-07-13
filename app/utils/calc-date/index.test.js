import test from 'ava';
import calcDate from './';

test('should have correct value with date in next day', (t) => {
	const actual = calcDate(new Date(2016, 0, 1), new Date(2016, 0, 2));
	const expected = '1&nbsp;день';
	t.is(actual, expected);
});

test('should have correct value with date in next month', (t) => {
	const actual = calcDate(new Date(2016, 0, 1), new Date(2016, 1, 1));
	const expected = '1&nbsp;месяц';
	t.is(actual, expected);
});

test('should have correct value with date in next year', (t) => {
	const actual = calcDate(new Date(2016, 0, 1), new Date(2017, 0, 1));
	const expected = '1&nbsp;год';
	t.is(actual, expected);
});

test('should have correct value', (t) => {
	const actual = calcDate(new Date(2016, 0, 1), new Date(2016, 11, 31));
	const expected = '11&nbsp;месяцев и 30&nbsp;дней';
	t.is(actual, expected);
});
