import superagent from 'superagent';

export function sendOrderForm(values) {
	values.files = values.files.map((file) => ({
		filename: file.filename,
		title: file.originalname,
	}));

	return function () {
		superagent
			.post('/order')
			.send(values)
			.end(() => {
				history.pushState(null, '/thanks/order');
			});
	};
}
