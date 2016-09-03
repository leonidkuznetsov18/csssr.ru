import test from 'ava';
import {
	REQUEST_VACANCIES,
	REJECT_VACANCIES,
	RECEIVE_VACANCIES,
} from 'constants/actions';
import reducer from './';

test('should set isFetching on request', (t) => {
	const state = {
		isFetcing: false,
	};

	const actual = reducer(state, {
		type: REQUEST_VACANCIES,
	});

	t.is(actual.isFetching, true);
});

test('should remove error on request', (t) => {
	const state = {
		error: true,
	};

	const actual = reducer(state, {
		type: REQUEST_VACANCIES,
	});

	t.is(actual.error, null);
});

test('should unset isFetching on request finish', (t) => {
	const state = {
		isFetcing: false,
	};
	const actualReject = reducer(state, {
		type: REJECT_VACANCIES,
	});
	const actualReceive = reducer(state, {
		type: RECEIVE_VACANCIES,
	});

	t.is(actualReject.isFetching, false);
	t.is(actualReceive.isFetching, false);
});

test('should add vacancies', (t) => {
	const state = {
		isFetcing: false,
		data: {
			test: true,
		},
	};
	const actual = reducer(state, {
		type: RECEIVE_VACANCIES,
		data: {
			action: true,
		},
	});

	t.deepEqual(actual.data, {
		test: true,
		action: true,
	});
});

test('should return state on unknown action', (t) => {
	const state = {};
	const actual = reducer(state, {
		type: 'UNKNOWN',
	});
	const expected = state;

	t.is(actual, expected);
});
