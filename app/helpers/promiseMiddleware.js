export default function promiseMiddleware() {
	return next => action => {
		const { promise, types, type, ...rest } = action;

		if (!promise) {
			return next(action);
		}

		const {success, error} = types;

		next({...rest, type: type});

		promise
			.then(response => {
				if (response.status !== 200) {
					throw new Error(response.message);
				}
				return response.json();
			})
			.then(response => next({...rest, response, type: success}))
			.catch(response => next({...rest, response, type: error}));
	};
}
