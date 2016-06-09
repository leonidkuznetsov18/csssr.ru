import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import Layout from '../app/components/layout';
import morgan from 'morgan';
import webpack from 'webpack';
import jobs from './jobs';
import outsource from './outsource';
import order from './order';
import { handler, limitHandler, upload } from './upload';
import multipart from 'connect-multiparty';

const app = express();
const multipartMiddleware = multipart();
const isProduction = app.get('env') !== 'development';
const port = Number(process.env.PORT) || 3000;
const publicPath = '/_assets/';
const ASSETS = path.join(__dirname, '..', 'static');
const ASSETS_BUILD = path.join(__dirname, '..', 'build', 'public');
const SCRIPT_URL = publicPath + 'main.js';
const STYLE = '/_assets/main.css';
let renderApplication;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

if (isProduction) {
	renderApplication = require('../build/prerender/main.js').default;

	app.use('/_assets', express.static(ASSETS_BUILD, {
		maxAge: '200d',
	}));
} else {
	const config = require('../webpack-dev.config.js');
	const compiler = webpack(config);

	app.use(morgan('dev'));
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}

app.use(limitHandler);

app.post('/jobs', multipart({
	maxFilesSize: 50 * 1024 * 1024,
}), jobs);
app.post('/order', multipartMiddleware, order);
app.post('/outsource', multipartMiddleware, outsource);
app.post('/upload', upload.single('file'), handler);

app.get('/static/*', (req, res) => {
	res.redirect(req.path.substr('static/'.length));
});

app.use(express.static(ASSETS, {
	maxAge: '200d',
}));

app.get('/*', function (request, response) {
	let rendered;
	let style;
	let script = SCRIPT_URL;

	if (/\.html$/.test(request.path)) {
		response.redirect(301, request.path.replace(/\.html?/, ''));
		return;
	}

	if (isProduction) {
		const publicAssets = require('../build/public/assets.json');

		rendered = renderApplication(request, response);
		script = publicPath + publicAssets.main.js;
		style = STYLE;

		if (!rendered.content) {
			return;
		}
	}

	const layout = React.createElement(Layout, {
		...rendered,
		script,
		style,
	});

	const application = ReactDOMServer.renderToStaticMarkup(layout);
	response.contentType('text/html');
	response.write('<!DOCTYPE html>');
	response.end(application);
});

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});
