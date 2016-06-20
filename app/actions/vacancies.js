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
		.end((error, response) => {
			if (
				!navigator.onLine ||
				response && response.body && response.body.error === 'ENOENT'
			) {
				return dispatch(rejectVacancies('NO_CONNECT'));
			}

			if (!response) {
				return dispatch(rejectVacancies(error));
			}

			if (response.statusCode === 200) {
				return dispatch(receiveVacancies({
					[filter]: response.body.vacancies,
				}));
			}

			dispatch(rejectVacancies(error));
		});
};
