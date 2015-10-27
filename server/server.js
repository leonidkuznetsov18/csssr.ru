import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import Layout from '../app/components/layout';
import morgan from 'morgan';
import getPageMetadata from 'helpers/getPageMetadata';
import superagent from 'superagent';
import FormData from 'form-data';

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

import {sendLetter, renderOrderTemplate} from './lib/mailer';

function getFormData({optionsArray, contacts, files, filesLink, lang = 'ru'}) {
	const form = new FormData();

	for (let option of optionsArray) {
		form.append('options[]', option);
	}

	for (const key in contacts) if (contacts.hasOwnProperty(key)) {
		form.append(`contact[${key}]`, contacts[key]);
	}

	files.forEach((file, i) => {
		form.append(`files[${i}][filename]`, file.filename);
		form.append(`files[${i}][title]`, file.originalname);
	});

	form.append('link', filesLink);
	form.append('lang', lang);

	return form;
}

function getToolsInfo(form) {
	return new Promise((resolve, reject) => {
		superagent
			.post('http://test-tools-back.csssr.ru/api/site/order')
			.send(form)
			.end((err, res) => {
				if (err) reject(err);
				resolve(JSON.parse(res.text));
			});
	});
}

async function newOrder (data) {
	// TODO: validate req.body
	const form = getFormData(data);
	const toolsInfo = await getToolsInfo(form);
	const html = renderOrderTemplate(toolsInfo, data);
	await sendLetter(toolsInfo, html);
}


app.post('/order', (req, res) => {
	newOrder(req.body)
		.then(() => res.send({result: 'ok'}))
		.catch(err => {
			console.log(err);
			res.send({result: 'fail'});
		});
});

app.get('/static/*', (req, res) => {
	res.redirect(req.path.substr('static/'.length));
});
app.use(express.static(ASSETS, {
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
