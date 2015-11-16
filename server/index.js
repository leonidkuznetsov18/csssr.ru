require('babel/register')({
	ignore: function (filename) {
		if (/prerender(\/|\\)main/.test(filename) || /node_modules/.test(filename)) {
			return true;
		}

		return false;
	},
});

process.env = require('../config/env.js');;
require('module').Module._initPaths();

require('./server.js');
