import React from 'react';
import ReactDOMServer from 'react-dom/server';

import MailOutsource from 'mails/outsource';
import sendMail from '../lib/mail';

function sendOutsourceMail(data) {
	return sendMail({
		subject: 'CSSSR. Заказ на аутсорс',
		html: ReactDOMServer.renderToStaticMarkup(<MailOutsource data={data}/>),
	});
}

export default function (req, res) {
	sendOutsourceMail(req.body)
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
