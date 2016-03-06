import superagent from 'superagent';
import { push } from 'react-router-redux';

export function sendOutsourceForm(values) {
	return function (dispatch) {
		const formData = new FormData();

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		superagent
			.post('/outsource')
			.send(formData)
			.end(() => {
				dispatch(push('/outsource/thanks'));
			});
	};
}
