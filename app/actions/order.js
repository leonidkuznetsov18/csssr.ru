import superagent from 'superagent';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux';

export function sendOrderForm(values) {
	values.files = values.files.map((file) => ({
		filename: file.filename,
		title: file.originalname,
	}));

	return function (dispatch) {
		superagent
			.post('/order')
			.send(values)
			.end((err, response) => {
				if (response.statusCode === 200) {
					dispatch(stopSubmit('order'));
					dispatch(push('/order/thanks'));
					return;
				}

				dispatch(stopSubmit('order', {
					_error: response.body.result || true,
				}));
			});
	};
}
