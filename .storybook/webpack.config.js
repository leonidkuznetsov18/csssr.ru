require('babel-register');

module.exports = require('../make-webpack-config').default({
	devServer: true,
	hotComponents: true,
	devtool: 'eval',
	debug: true,
	storybook: true,
});
