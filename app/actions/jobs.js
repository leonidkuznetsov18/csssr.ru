import superagent from 'superagent';

export function sendAnswerForm(values) {
	return function () {
		const formData = new FormData();
		values.file = values.file[0];

		Object.keys(values).forEach((key) => formData.append(key, values[key]));

		superagent
			.post('/jobs')
			.send(formData)
			.end(() => {
				history.pushState(null, `/thanks/${values.job}`);
			});
	};
}
