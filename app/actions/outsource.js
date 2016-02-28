let superagent;

if (IS_CLIENT) {
	superagent = require('superagent');
}

export function sendOutsourceForm(values) {
	return function () {
		const formData = new FormData();

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		superagent
			.post('/outsource')
			.send(formData)
			.end(() => {
				history.pushState(null, '/thanks/outsource');
			});
	};
}
