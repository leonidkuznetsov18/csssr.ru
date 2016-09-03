import path from 'path';

const env = {
	INNER_URL: `http://localhost:${process.env.PORT || 3000}`,
	NODE_PATH: path.join(__dirname, '../app'),
	FILES_FOLDER: './static/uploads/',
	BROWSERSLIST_CONFIG: path.join(__dirname, '..', 'browserlist'),
};

export default {
	...env,
	...require(`./env.${process.env.ENV || 'development'}.js`),
	...process.env,
};
