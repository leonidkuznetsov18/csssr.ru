import validate from 'helpers/validate';
import options from './order-options.yml';

export default {
	form: {
		showErrorWindow: false,
		options,
		isValid: true,
		contacts: {
			name: {
				value: 'Вася',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			email: {
				value: 'dzhiriki@gmail.com',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			skype: {
				value: 'dzhiriki',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			phone: {
				value: '+79999999999',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
		},
		filesLink: '',
		files: [],
	},
};
