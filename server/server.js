import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import Layout from '../app/components/layout';
import morgan from 'morgan';
import getPageMetadata from 'helpers/getPageMetadata';

var app = express();
var isProduction = app.get('env') === 'production';
var port = +(process.env.PORT || 3000);
var publicPath = isProduction ? '/_assets/' : '//localhost:2992/_assets/';
var ASSETS = path.join(__dirname, '..', 'static');
var ASSETS_BUILD = path.join(__dirname, '..', 'build', 'public');
var SCRIPT_URL = publicPath + 'main.js';
var STYLE = '/_assets/main.css';
var renderApplication;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (isProduction) {
	renderApplication = require('../build/prerender/main.js');
} else {
	app.use(morgan('dev'));
}
app.use(compression());

app.use('/_assets', express.static(ASSETS_BUILD, {
	maxAge: '200d'
}));


import {handler, limitHandler, upload} from './lib/storage';
app.use(limitHandler);
app.post('/upload', upload.single('file'), handler);

app.post('/order', (req, res) => {
	console.log('New order:', req.body);
	// TODO: check that data is correct
	res.send({result: 'ok'});
	// TODO: request to tools
	// TODO: send message via nodemailer
});

app.get('/*.*', express.static(ASSETS, {
	maxAge: '200d'
}));

app.get('/*', function(request, response) {
	var content;
	var layout;
	var application;
	var style;

	if (isProduction) {
		content = renderApplication(request);
		style = STYLE;
	}

	layout = React.createElement(Layout, {
		script: SCRIPT_URL,
		style: style,
		content: content,
		meta: getPageMetadata(request.path)
	});

	application = ReactDOMServer.renderToStaticMarkup(layout);
	response.contentType('text/html');
	response.write('<!DOCTYPE html>');
	response.end(application);
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
