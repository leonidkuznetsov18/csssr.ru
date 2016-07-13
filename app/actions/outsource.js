import superagent from 'superagent';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux';

export function sendOutsourceForm(values) {
	return function (dispatch) {
		const formData = new FormData();

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		dispatch(stopSubmit('outsource', {
			_error: false,
		}));

		superagent
			.post('/outsource')
			.send(formData)
			.end((err, response) => {
				if (response.statusCode === 200) {
					dispatch(push('/outsource/thanks'));
					return;
				}

				dispatch(stopSubmit('outsource', {
					_error: response.body.result || true,
				}));
			});
	};
}
