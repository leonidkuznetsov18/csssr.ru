import superagent from 'superagent';

export const requestVacancies = (filter = 'active') => ({
	type: 'VACANCIES',
	payload: new Promise((resolve, reject) =>
		superagent
			.get(`${process.env.INNER_URL}/vacancies/${filter}`)
			.end((error, response) => {
				if (
					(global.navigator && !global.navigator.onLine) ||
					response && response.body && response.body.error === 'ENOENT'
				) {
					return reject('NO_CONNECT');
				}

				if (!response) {
					return reject(error);
				}

				if (response.statusCode === 200) {
					return resolve({
						[filter]: response.body.vacancies,
					});
				}

				reject(error);
			})
	),
});
