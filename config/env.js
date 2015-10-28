import path from 'path';

const env = {
	NODE_PATH: path.join(__dirname, '../app')
};

export default {
	...env,
	...require(`./env.${process.env.NODE_ENV || 'development'}.js`),
	...process.env
};
