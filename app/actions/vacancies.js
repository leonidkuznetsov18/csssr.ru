import superagent from 'superagent';
import {
	REQUEST_VACANCIES,
	REJECT_VACANCIES,
	RECEIVE_VACANCIES,
} from 'constants/actions';

export const receiveVacancies = (data) => ({
	type: RECEIVE_VACANCIES,
	data,
});

export const rejectVacancies = (error) => ({
	type: REJECT_VACANCIES,
	error,
});

export const requestVacancies = (filter = 'active') => (dispatch) => {
	dispatch({
		type: REQUEST_VACANCIES,
	});
	superagent
		.get(`/vacancies/${filter}`)
		.end((error, { statusCode, body }) => {
			if (statusCode === 200) {
				return dispatch(receiveVacancies({
					[filter]: body.vacancies,
				}));
			}

			dispatch(rejectVacancies(error));
		});
};
