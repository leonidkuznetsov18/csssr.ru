import test from 'ava';
import stopPropagation from './';
import sinon from 'sinon';

test('should not throws on object without stopPropagation method', (t) => {
	t.notThrows(() => stopPropagation({
		someKey: 'someValue',
	}));
});

test('should not throws on empty param', (t) => {
	t.notThrows(() => stopPropagation());
});

test('should call stopPropagation method', (t) => {
	const callback = sinon.spy();

	stopPropagation({
		stopPropagation: callback,
	});

	t.truthy(callback.called);
});
