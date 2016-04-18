import nodemailer from 'nodemailer';
import directTransport from 'nodemailer-direct-transport';

const transporter = nodemailer.createTransport(directTransport({
	name: 'csssr.ru',
	debug: process.env.NODE_ENV !== 'production',
}));

const defaultOptions = {
	from: 'CSSSR Order <sales@csssr.io>',
	to: process.env.ORDER_MAIL,
};

export default function sendMail(options) {
	return new Promise((resolve, reject) => {
		transporter.sendMail({
			...defaultOptions,
			...options,
		}, (err, res) => {

			if (err) {
				reject(err);
				return;
			}

			resolve(res);
		});
	});
}
