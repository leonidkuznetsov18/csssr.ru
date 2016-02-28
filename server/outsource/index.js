import sendMail from '../lib/mail';

export default function (req, res) {
	const renderOutsourceTemplate = ({ name, email, skype, phone }) => `
		<p>
			Контактное лицо: ${name}<br>
			Электронная почта: <a href="mailto:${email}">${email}</a><br>
			Скайп: ${skype}<br>
			Телефон: ${phone}<br>
		</p>
	`;

	sendMail({
		subject: 'CSSSR. Заказ на аутсорс',
		html: renderOutsourceTemplate(req.body),
	})
		.then(() => res.send({ result: 'ok' }))
		.catch(() => res.send({ result: 'fail' }));
}
