require('babel-register')({
	ignore: function (filename) {
		if (/prerender(\/|\\)main/.test(filename) || /node_modules/.test(filename)) {
			return true;
		}

		return false;
	},
});

require('babel-polyfill');

process.env = require('../config/env.js').default;
require('module').Module._initPaths();

require('./server.js');
