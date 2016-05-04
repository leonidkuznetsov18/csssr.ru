require('babel-register');

module.exports = [
	require('./make-webpack-config').default({
		longTermCaching: true,
		separateStylesheet: true,
		minimize: true,
	}),

	require('./make-webpack-config').default({
		minimize: true,
		prerender: true,
	}),
];
