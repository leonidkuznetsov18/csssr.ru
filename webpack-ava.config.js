require('babel-register');

/* eslint-disable */
var config = require('./make-webpack-config').default({
	originalName: true,
});
/* eslint-enable */

module.exports = {
	output: {
		libraryTarget: 'commonjs2',
	},
	module: {
		loaders: config.module.loaders.slice(1),
	},
	postcss: config.postcss,
	resolve: config.resolve,
};
