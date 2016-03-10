import superagent from 'superagent';

export default function (req, res) {
	let request = superagent
		.post(`${process.env.HR_DOMAIN}/api/candidates`)
		.attach('file', req.files.file.path);

	Object.keys(req.body).forEach((key) => {
		request = request.field(key, req.body[key]);
	});

	request.end((err, response) => {
		if (err) {
			res.status(500)
				.send({ result: 'ERROR' })
				.end();

			return;
		}

		res
			.send({ result: 'OK' })
			.status(200)
			.end();
	});
}
