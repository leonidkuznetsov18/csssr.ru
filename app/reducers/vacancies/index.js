import {
	VACANCIES_PENDING,
	VACANCIES_REJECTED,
	VACANCIES_FULFILLED,
} from 'constants/actions';

const initialState = {
	isFetching: false,
	error: null,
	data: {
		active: [],
		preview: [],
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
	case VACANCIES_PENDING:
		return {
			...state,
			isFetching: true,
			error: null,
		};

	case VACANCIES_REJECTED:
		return {
			...state,
			isFetching: false,
			error: payload,
		};

	case VACANCIES_FULFILLED:
		return {
			...state,
			isFetching: false,
			data: {
				...state.data,
				...payload,
			},
		};

	default:
		return state;
	}
};
