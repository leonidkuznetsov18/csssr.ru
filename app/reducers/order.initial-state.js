import validate from 'helpers/validate';
import options from './order-options.yml';

export default {
	form: {
		showErrorWindow: false,
		options,
		isValid: false,
		contacts: {
			name: {
				value: '',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			email: {
				value: '',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			skype: {
				value: '',
				validate: (value) => validate(value, {
					required: true,
					maxlength: 100,
				}),
			},
			phone: {
				value: '',
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
