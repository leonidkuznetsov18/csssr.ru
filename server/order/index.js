import React from 'react';
import ReactDOMServer from 'react-dom/server';

import MailOrder from 'mails/order';
import sendMail from '../lib/mail';
import getToolsInfo from '../lib/getToolsInfo';

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
		labels: [
			'ru',
			'project',
		],
		lang: 'ru',
	};
}

function sendOrderMail(toolsData, data) {
	return sendMail({
		subject: `Проект ${toolsData.orderNumber}`,
		replyTo: data.email,
		html: ReactDOMServer.renderToStaticMarkup(
			<MailOrder data={data} toolsData={toolsData} />
		),
	});
}

export default function (req, res) {
	const form = getFormData(req.body);

	getToolsInfo(form)
		.then((toolsData) => sendOrderMail(toolsData, req.body))
		.catch(() => sendOrderMail({}, req.body))
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
