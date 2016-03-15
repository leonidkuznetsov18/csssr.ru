import path from 'path';

const env = {
	NODE_PATH: path.join(__dirname, '../app'),
	FILES_FOLDER: './static/uploads/',
};

export default {
	...env,
	...require(`./env.${process.env.ENV || 'development'}.js`),
	...process.env,
};
