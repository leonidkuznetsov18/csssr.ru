import superagent from 'superagent';

import getAttachments from '../../app/utils/get-attachments';

export default function (req, res) {
	let request = superagent
		.post(`${process.env.HR_DOMAIN}/api/candidates`);

	if (req.files && req.files.file) {
		request.attach('file', req.files.file.path);
	}

	let attachments = [];

	Object.keys(req.body).forEach((key) => {
		const value = req.body[key];

		if (Array.isArray(value)) {
			attachments = attachments.concat(getAttachments(key, value));
			return;
		}

		attachments.push({ key, value });
	});

	attachments.forEach(({ key, value }) => {
		request = request.field(key, value);
	});

	request.end((err) => {
		if (err) {
			res.status(500)
				.send({ result: 'ERROR' })
				.end();

			return;
		}

		res
			.status(200)
			.send({ result: 'OK' })
			.end();
	});
}
