import React from 'react';
import ReactDOMServer from 'react-dom/server';

import MailOutsource from 'mails/outsource';
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
		labels: [
			'ru',
			'outsource',
		],
		lang: 'ru',
	};
}

function sendOutsourceMail(toolsData, data) {
	return sendMail({
		subject: `CSSSR. Заказ на аутсорс номер ${toolsData.orderNumber}`,
		html: ReactDOMServer.renderToStaticMarkup(
			<MailOutsource toolsData={toolsData} data={data} />
		),
	});
}

export default function (req, res) {
	const form = getFormData(req.body);

	getToolsInfo(form)
		.then((toolsData) => sendOutsourceMail(toolsData, req.body))
		.catch(() => sendOutsourceMail({}, req.body))
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
