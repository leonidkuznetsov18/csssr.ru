import superagent from 'superagent';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux';

import getAttachments from 'utils/get-attachments';

export function sendAnswerForm(values) {
	return function (dispatch) {
		if (values.file) {
			values.file = values.file[0];
		}

		let attachments = [];

		Object.keys(values).forEach((key) => {
			const value = values[key];

			if (Array.isArray(value)) {
				attachments = attachments.concat(getAttachments(key, value));
				return;
			}

			attachments.push({ key, value });
		});

		dispatch(stopSubmit('job', {
			_error: false,
		}));

		let request = superagent.post('/jobs');

		attachments.forEach(({ key, value }) => {
			request = request.field(key, value);
		});

		request
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
