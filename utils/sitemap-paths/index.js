require.extensions['.css'] = function () {
	return null;
};

require('babel-register');

require('babel-polyfill');

process.env = require('../../config/env.js').default;

/* eslint-disable */
require('module').Module._initPaths();
/* eslint-enable */

module.exports = require('./paths-builder').default;
