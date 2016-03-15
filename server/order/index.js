import React from 'react';
import ReactDOMServer from 'react-dom/server';
import superagent from 'superagent';

import MailOrder from 'mails/order';
import sendMail from '../lib/mail';

function getFormData(data) {
	return {
		contact: {
			email: data.email,
			name: data.name,
			skype: data.skype,
			phone: data.phone,
		},
		options: data.modernBrowsers.concat(
			data.mobileBrowsers,
			data.oldBrowsers,
			data.pagesWidth,
			data.addition
		),
		link: data.filesLink,
		files: data.files,
		siteUrl: process.env.SITE_URL,
		lang: 'ru',
	};
}

function getToolsInfo(form) {
	return new Promise((resolve, reject) => {
		superagent
			.post(process.env.CRM_URL)
			.send(form)
			.end((err, res) => {
				if (err) {
					reject(err);
				}

				resolve(JSON.parse(res.text));
			});
	});
}

function sendOrderMail(toolsData, data) {
	return sendMail({
		subject: `CSSSR. Заказ номер ${toolsData.unique_number}`,
		html: ReactDOMServer.renderToStaticMarkup(<MailOrder toolsData={toolsData} data={data}/>),
	});
}

export default function (req, res) {
	const form = getFormData(req.body);

	getToolsInfo(form)
		.then((toolsData) => sendOrderMail(toolsData, req.body))
		.then(() => {
			res.status(200)
				.send({ result: 'OK' })
				.end();
		})
		.catch(() => {
			res.status(500)
				.send({ result: 'ERROR' })
				.end();
		});
}
