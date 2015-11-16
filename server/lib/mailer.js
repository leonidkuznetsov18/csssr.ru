import nodemailer from 'nodemailer';
import directTransport from 'nodemailer-direct-transport';
import FormData from 'form-data';
import superagent from 'superagent';

const transporter = nodemailer.createTransport(directTransport({
	name: 'csssr.ru',
	debug: process.env.NODE_ENV != 'production'
}));


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



const renderOrderTemplate = (toolsData, {options, contacts, pagesWidth, addition, filesLink}) => {
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

const mailOptions = {
	from: 'CSSSR Order <order@csssr.ru>',
	to: process.env.ORDER_MAIL,
};


function sendMail(mailOptions) {
	transporter.sendMail(mailOptions, (err, res) => {
		if (err) return Promise.reject(err);
		return Promise.resolve(res);
	});
}

export async function sendOrder(data) {
	const form = getFormData(data);
	const toolsInfo = await getToolsInfo(form);
	const html = renderOrderTemplate(toolsInfo, data);

	await sendMail({
		...mailOptions,
		subject: `CSSSR. Заказ номер ${toolsInfo.unique_number}`,
		html: html
	});
}

const renderOutsourceTemplate = ({name, email, skype, phone}) => `
	<p>
		Контактное лицо: ${name}<br>
		Электронная почта: <a href="mailto:${email}">${email}</a><br>
		Скайп: ${skype}<br>
		Телефон: ${phone}<br>
	</p>
`;

export async function sendOutsourceProposal(data) {
	await sendMail({
		...mailOptions,
		subject: `CSSSR. Заказ на аутсорс`,
		html: renderOutsourceTemplate(data)
	});
}
