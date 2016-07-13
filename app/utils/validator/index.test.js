import test from 'ava';
import validator from './';

const invalid = true;
const valid = false;

const generateString = (length) =>
	Array.from(Array(100).keys()).join('').slice(0, length);

const generateTest = (t, field, result, values) => {
	values.forEach((value) => {
		const actual = validator({
			[field]: value,
		});
		const expected = {
			[field]: result,
		};

		t.deepEqual(actual, expected, `Value: ${value}`);
	});
};

test('should correct work with unknown field', (t) => {
	generateTest(t, 'qwerty', valid, [
		'',
		'anyvalue',
		'+79991234567',
		'+380123456789',
	]);
});

test('should correct work with email default rules', (t) => {
	generateTest(t, 'email', invalid, [
		'',
		'invalid',
		'invalid@',
		'invalid @',
		'Abc.example.com',
		'A@b@c@example.com',
		'a\'b(c)d,e:f;g<h>i[j\\k]l@example.com',
		'just\'not\'right@example.com',
		'this is\'not\\allowed@example.com',
		'this\\ still\\\'not\\\\allowed@example.com',
		'какаято@кириллическая.почта',
	]);

	generateTest(t, 'email', valid, [
		'_somename@example.com',
		'niceandsimple@example.com',
		'very.common@example.com',
		'a.little.lengthy.but.fine@dept.example.com',
		'disposable.style.email.with+symbol@example.com',
	]);
});

test('should correct work with name default rules', (t) => {
	generateTest(t, 'name', invalid, [
		'',
		generateString(101),
	]);

	generateTest(t, 'name', valid, [
		'Я',
		'Ян',
		'Вася',
		'Иванов Иван Иванович',
		generateString(99),
		generateString(100),
	]);
});

test('should correct work with skype default rules', (t) => {
	generateTest(t, 'skype', invalid, [
		'shrt',
		'кириллическийлогин',
		'L' + generateString(32),
	]);

	generateTest(t, 'skype', valid, [
		'',
		'CommonLogin',
		'WithNumber123',
		'With.Some.Dots',
		'With-Some-Dashes',
		'With_Some_Underscore',
		'With_All.Type-Character123',
		'L' + generateString(31),
	]);
});

test('should correct work with phone default rules', (t) => {
	generateTest(t, 'phone', invalid, [
		'+7999',
		'+7999123456780',
	]);

	generateTest(t, 'phone', valid, [
		'',
		'+79991234567',
		'+380123456789',
	]);
});
