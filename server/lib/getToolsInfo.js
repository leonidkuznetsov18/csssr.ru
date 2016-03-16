import superagent from 'superagent';

export default function getToolsInfo(data) {
	return new Promise((resolve, reject) => {
		superagent
			.post(process.env.CRM_URL)
			.send({
				...data,
				siteUrl: process.env.SITE_URL,
			})
			.end((err, res) => {
				if (err) {
					reject(err);
				}

				try {
					resolve(JSON.parse(res.text));
				} catch (error) {
					reject(res.text);
				}
			});
	});
}
