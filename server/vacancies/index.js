import superagent from 'superagent';

export default function (req, res) {
	superagent
		.get(`${process.env.HR_DOMAIN}/api/vacancies/${req.params.filter}`)
		.end((error, response) => {
			if (!response) {
				return res.status(500).json({ error: error.code });
			}

			if (response.statusCode === 200) {
				return res.json({ vacancies: response.body });
			}

			res.status(500).json({ error });
		});
}
