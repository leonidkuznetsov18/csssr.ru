import superagent from 'superagent';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux';

export function sendAnswerForm(values) {
	return function (dispatch) {
		const formData = new FormData();
		values.file = values.file[0];

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		dispatch(stopSubmit('job', {
			_error: false,
		}));

		superagent
			.post('/jobs')
			.send(formData)
			.end((err, response) => {
				const { result } = (response.body || { result: 'ERROR' });

				if (response.statusCode === 200) {
					dispatch(stopSubmit('job'));
					dispatch(push(`/jobs/${values.vacancy}/thanks`));
					return;
				}

				dispatch(stopSubmit('job', {
					_error: result || true,
				}));
			});
	};
}

export function setEmptyFields() {
	return function (dispatch) {
		return dispatch(stopSubmit('job', {
			_error: 'EMPTY_FIELDS',
		}));
	};
}
