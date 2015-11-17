import validate from 'helpers/validate';

export default {
	form: {
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
};
