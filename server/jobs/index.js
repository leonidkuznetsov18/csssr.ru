import superagent from 'superagent';

export default function (req, res) {
	let request = superagent
		.post(`${process.env.HR_DOMAIN}/api/candidates`)
		.attach('file', req.files.file.path);

	Object.keys(req.body).forEach((key) => {
		request = request.field(key, req.body[key]);
	});

	request.end(() => {
		res.status(200).end();
	});
}
