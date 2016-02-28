require('babel-register')({
	ignore: (filename) => {
		if (/prerender(\/|\\)main/.test(filename) || /node_modules/.test(filename)) {
			return true;
		}

		return false;
	},
});

require('babel-polyfill');

process.env = require('../config/env.js').default;

/* eslint-disable */
require('module').Module._initPaths();
/* eslint-enable */

require('./server.js');
