import test from 'ava';
import {
	VACANCIES_PENDING,
	VACANCIES_REJECTED,
	VACANCIES_FULFILLED,
} from 'constants/actions';
import reducer from './';

test('should set isFetching on request', (t) => {
	const state = {
		isFetcing: false,
	};

	const actual = reducer(state, {
		type: VACANCIES_PENDING,
	});

	t.is(actual.isFetching, true);
});

test('should remove error on request', (t) => {
	const state = {
		error: true,
	};

	const actual = reducer(state, {
		type: VACANCIES_PENDING,
	});

	t.is(actual.error, null);
});

test('should unset isFetching on request finish', (t) => {
	const state = {
		isFetcing: false,
	};
	const actualReject = reducer(state, {
		type: VACANCIES_REJECTED,
	});
	const actualReceive = reducer(state, {
		type: VACANCIES_FULFILLED,
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
		type: VACANCIES_FULFILLED,
		payload: {
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
