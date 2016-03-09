import superagent from 'superagent';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux';

export function sendAnswerForm(values) {
	return function (dispatch) {
		const formData = new FormData();
		values.file = values.file[0];

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		superagent
			.post('/jobs')
			.send(formData)
			.end(() => {
				dispatch(stopSubmit('job'));
				dispatch(push(`/jobs/${values.vacancy}/thanks`));
			});
	};
}
