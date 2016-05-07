const generatePath = (base, path = '') => {
	base = (base.length && base[base.length - 1] !== '/') ? base + '/' : base;
	return base + path;
};

const processRoute = (store = [], baseRoute = '', route) => {
	const path = generatePath(baseRoute, route.path);
	const childRoutes = route.childRoutes;

	if (childRoutes && childRoutes.length) {
		/* eslint-disable */
		parseRoutes(store, path, childRoutes);
		/* eslint-disable */
	}

	store.push(path);
};

const parseRoutes = (store = [], baseRoute = '', routes) => {
	const isArray = Array.isArray(routes);

	if (!isArray) {
		store.push(generatePath(baseRoute, routes.path));
	} else {
		routes.forEach(processRoute.bind(null, store, baseRoute));
	}

	return store;
};

export default parseRoutes;
