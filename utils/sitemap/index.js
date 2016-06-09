require.extensions['.css'] = function () {
	return null;
};

require('babel-register');

process.env = require('../../config/env.js').default;

/* eslint-disable */
require('module').Module._initPaths();
/* eslint-enable */

const build = require('./builder').default;
const hostname = process.env.BASE_URL;
const dist = './static/sitemap.xml';

build(hostname, dist);
