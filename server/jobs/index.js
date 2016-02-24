import superagent from 'superagent';

export default function (req, res) {
	let request = superagent
		.post(`${process.env.HR_DOMAIN}/jobs/${req.body.job}/create`)
		.attach('file', req.files.file.path);

	Object.keys(req.body).forEach((key) => {
		request = request.field(key, req.body[key]);
	});

	request.end((err, response) => {
		res.status(200).end();
	});
}
