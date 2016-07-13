import test from 'ava';
import spliter from './';

test('should correctly split short strings', (t) => {
	t.is(spliter('12345', [1, 2, 3, 4, 5]), '1 23 45');
});

test('should correctly split normal strings', (t) => {
	t.is(spliter('1234567890', [1, 2, 3, 4]), '1 23 456 7890');
});

test('should correctly split long strings', (t) => {
	t.is(spliter('123456789', [1, 2, 3]), '1 23 456 789');
});
