import nodemailer from 'nodemailer';
import auth from './auth.config';

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth
});

export const renderOrderTemplate = (toolsData, {options, contacts, pagesWidth, addition, filesLink}) => {
	const orderNumber = toolsData.unique_number;
	const googleDriveLink = toolsData.url;

	const sourceMakets = googleDriveLink ? `Макеты — <a href="${googleDriveLink}">${googleDriveLink}</a><br>` : '';
	const sourceLink = filesLink ? `Ссылка — <a href="${filesLink}">${filesLink}</a><br>`: '';

	return `
		<p>
			Источник:<br>
			${sourceMakets}
			${sourceLink}
		</p>
		<p>
			<a href="http://test-tools.csssr.ru/order/${orderNumber}">Детали заказа</a><br>
			Современные браузеры: ${options.modernBrowsers.join(', ') || '—'}<br>
			Устаревшие браузеры: ${options.oldBrowsers.join(', ') || '—'}<br>
			Мобильные платформы: ${options.mobile.join(', ') || '—'}<br>
			Ширина страниц: ${options.pagesWidth[0]}<br>
			Дополнительно: ${options.mobile.join(', ') || '—'}<br>
		</p>

		<p>
			Контактное лицо: ${contacts.name}<br>
			Электронная почта: <a href="mailto:${contacts.email}">${contacts.email}</a><br>
			Скайп: ${contacts.skype}<br>
			Телефон: ${contacts.phone}<br>
		</p>
	`;
};

const getMailOptions = (toolsData, html) => ({
	from: 'Test User ✔ <staxoecl@gmail.com>',
	to: 'nitive@icloud.com',
	subject: `CSSSR. Заказ номер ${toolsData.unique_number}`,
	html: html
});

export function sendLetter(toolsData, data) {
	const mailOptions = getMailOptions(toolsData, data);
	transporter.sendMail(mailOptions, (err, res) => {
		if (err) return Promise.reject(err);
		return Promise.resolve(res);
	});
}
