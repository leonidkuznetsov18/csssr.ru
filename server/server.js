import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import Layout from '../app/components/layout';
import morgan from 'morgan';
import webpack from 'webpack';
import getPageMetadata from 'helpers/getPageMetadata';
import jobs from './jobs';
import { handler, limitHandler, upload } from './lib/storage';
import { sendOrder, sendOutsourceProposal } from './lib/mailer';

const app = express();
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
app.use(compression());

app.use(limitHandler);
app.post('/upload', upload.single('file'), handler);

app.post('/order', (req, res) => {
	// TODO: validate req.body
	sendOrder(req.body)
		.then(() => res.send({ result: 'ok' }))
		.catch((err) => {
			console.log(err);
			res.send({ result: 'fail' });
		});
});

app.post('/outsource', (req, res) => {
	// TODO: validate req.body
	sendOutsourceProposal(req.body)
		.then(() => res.send({ result: 'ok' }))
		.catch((err) => {
			console.log(err);
			res.send({ result: 'fail' });
		});
});

app.get('/static/*', (req, res) => {
	res.redirect(req.path.substr('static/'.length));
});
app.use(express.static(ASSETS, {
	maxAge: '200d',
}));

app.get('/*', function (request, response) {
	let content;
	let layout;
	let application;
	let style;

	if (/\.html$/.test(request.path)) {
		response.redirect(request.path.replace(/\.html?/, ''));
		return;
	}

	if (isProduction) {
		content = renderApplication(request);
		style = STYLE;
	}

	layout = React.createElement(Layout, {
		script: SCRIPT_URL,
		style,
		content,
		meta: getPageMetadata(request.path),
	});

	application = ReactDOMServer.renderToStaticMarkup(layout);
	response.contentType('text/html');
	response.write('<!DOCTYPE html>');
	response.end(application);
});

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});
