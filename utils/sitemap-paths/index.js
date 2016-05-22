require.extensions['.css'] = function () {
	return null;
};

require('babel-register');

require('babel-polyfill');

process.env = require('../../config/env.js').default;

/* eslint-disable */
require('module').Module._initPaths();
/* eslint-enable */

const fs = require('fs');
const sm = require('sitemap');
const urls = require('./paths-builder').default;

const sitemap = sm.createSitemap({
	hostname: process.env.BASE_URL,
	urls,
});

fs.writeFileSync('./static/sitemap.xml', sitemap.toString());
