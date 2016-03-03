import superagent from 'superagent';
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
			.end(() => {
				dispatch(push('/thanks/order'));
			});
	};
}
