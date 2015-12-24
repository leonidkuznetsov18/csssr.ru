import validate from 'helpers/validate';

function generateForm(options) {
	return {
		firstname: {
			value: '',
			validate: (value) => validate(value, {
				required: true,
				maxlength: 100,
			}),
		},
		lastname: {
			value: '',
			validate: (value) => validate(value, {
				required: true,
				maxlength: 100,
			}),
		},
		age: {
			value: '',
			validate: (value) => validate(value, {
				required: true,
				maxlength: 100,
				number: true,
			}),
		},
		city: {
			value: '',
			validate: (value) => validate(value, {
				required: true,
				maxlength: 100,
			}),
		},
		file: {
			value: {
				name: options.fileLabel,
				type: '',
			},
			validate: (value) => validate(value, {
				custom: function (val) {
					return options.fileType.test(val.name);
				},
			}),
		},
		email: {
			value: '',
			validate: (value) => validate(value, {
				required: true,
				maxlength: 100,
				email: true,
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
	};
}

export default {
	'technical-manager': {
		name: 'Менеджер-технарь',
		key: 'technical-manager',
		form: generateForm({
			fileLabel: 'Прикрепите решение квеста',
			fileType: /\.docx$/,
		}),
	},

	'pixel-perfectionist': {
		name: 'Верстальщик пиксель-перфекционист',
		key: 'pixel-perfectionist',
		form: generateForm({
			fileLabel: 'Прикрепите zip-архив',
			fileType:  /\.zip$/,
		}),
	},
};
