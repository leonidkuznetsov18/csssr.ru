import test from 'ava';
import { ADD_FILES, UPDATE_FILE, REMOVE_FILE, ORDER_FORM_SENT } from 'constants/actions';
import reducer from './';

const state = [
	{
		id: 1,
		progress: 0,
		file: {},
	},
	{
		id: 2,
		progress: 0,
		file: {},
	},
	{
		id: 3,
		progress: 0,
		file: {},
	},
];

test('should return initialState', (t) => {
	const file = {
		preview: '1',
	};
	const actual = reducer(state, {
		type: ADD_FILES,
		files: [
			file,
		],
	});
	const expected = state.concat({
		id: file.preview,
		progress: 0,
		file,
	});

	t.deepEqual(actual, expected);
});

test('should add files', (t) => {
	const actual = reducer(undefined, {
		type: 'UNKNOWN',
	});
	const expected = [];

	t.deepEqual(actual, expected);
});

test('should update file progress', (t) => {
	const actual = reducer(state, {
		type: UPDATE_FILE,
		fileId: 1,
		properties: {
			progress: 5,
		},
	});
	const expected = [
		{
			id: 1,
			progress: 5,
			file: {},
		},
		{
			id: 2,
			progress: 0,
			file: {},
		},
		{
			id: 3,
			progress: 0,
			file: {},
		},
	];

	t.deepEqual(actual, expected);
});

test('should remove file from state', (t) => {
	const actual = reducer(state, {
		type: REMOVE_FILE,
		fileId: 1,
	});
	const expected = state.slice(1);

	t.deepEqual(actual, expected);
});

test('should clean state after form send', (t) => {
	const actual = reducer(state, {
		type: ORDER_FORM_SENT,
	});
	const expected = [];

	t.deepEqual(actual, expected);
});

test('should return state on unknown action', (t) => {
	const actual = reducer(state, {
		type: 'UNKNOWN',
	});
	const expected = state;

	t.is(actual, expected);
});
