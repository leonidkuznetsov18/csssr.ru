import {
	REQUEST_VACANCIES,
	REJECT_VACANCIES,
	RECEIVE_VACANCIES,
} from 'constants/actions';

export default (state = {
	isFetching: false,
	error: null,
	data: {
		active: [],
		preview: [],
	},
}, { type, data, error }) => {
	switch (type) {
	case REQUEST_VACANCIES:
		return {
			...state,
			isFetching: true,
			error: null,
		};

	case REJECT_VACANCIES:
		return {
			...state,
			isFetching: false,
			error,
		};

	case RECEIVE_VACANCIES:
		return {
			...state,
			isFetching: false,
			data: {
				...state.data,
				...data,
			},
		};

	default:
		return state;
	}
};
