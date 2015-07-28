module.exports = [
	require('./make-webpack-config')({
		longTermCaching: true,
		separateStylesheet: true,
		minimize: true
	}),

	require('./make-webpack-config')({
		prerender: true
	})
];
