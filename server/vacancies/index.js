import superagent from 'superagent';

export default function (req, res) {
	superagent
		.get(`${process.env.HR_DOMAIN}/api/vacancies/${req.params.filter}`)
		.end((error, { statusCode, body }) => {
			if (statusCode === 200) {
				return res.json({ vacancies: body });
			}

			res.status(500).json({ error });
		});
}
