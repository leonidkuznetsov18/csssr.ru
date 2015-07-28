import React from 'react';
import fs from 'fs';
import express from 'express';
import path from 'path';
import stats from '../build/stats.json';
import compression from 'compression';
import Layout from '../app/components/layout';

var	app = express();
var	port = +(process.env.PORT || 3000);
var publicPath = stats.publicPath;
var ASSETS = path.join(__dirname, '..', 'static');
var ASSETS_BUILD = path.join(__dirname, '..', 'build', 'public');
var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
var STYLE = (app.get('env') === 'production') ? fs.readFileSync(ASSETS_BUILD + '/main.css', 'utf-8') : '';
app.use(compression());

app.use('/_assets', express.static(ASSETS_BUILD, {
	maxAge: '200d'
}));

app.get('/*.*', express.static(ASSETS, {
	maxAge: '200d'
}));

app.get('/*', function(request, response) {
	var route = request.path;
	var renderApplication;
	var content;
	var layout;
	var application;
	var style;

	if (app.get('env') === 'production') {
		renderApplication = require('../build/prerender/main.js');
		content = renderApplication(route);
		style = STYLE;
	}

	layout = React.createElement(Layout, {
		script: SCRIPT_URL,
		style: style,
		content: content
	});

	application = React.renderToStaticMarkup(layout);
	response.contentType('text/html');
	response.write('<!DOCTYPE html>');
	response.end(application);
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
