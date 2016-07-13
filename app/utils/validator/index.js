import rEmail from 'regex-email';

const defaultRules = {
	name: {
		required: true,
		maxlength: 100,
	},

	email: {
		email: true,
		required: true,
	},

	skype: {
		minlength: 6,
		maxlength: 32,
		regexp: /[a-zA-Z][a-zA-Z0-9\.,\-_]/,
	},

	phone: {
		minlength: 12,
		maxlength: 13,
	},
};

const validators = {
	email: (value = '') => !rEmail.test(value),
	required: (value = '') => value.length === 0,
	minlength: (value, length) => !!value && value.length < length,
	maxlength: (value, length) => !!value && value.length > length,
	regexp: (value, regexp) => !!value && !regexp.test(value),
};

export default function validator(values, customRules) {
	const valuesName = Object.keys(values);
	const rules = {
		...defaultRules,
		...customRules,
	};

	return valuesName.reduce((acc, field) => {
		const fieldRules = Object.keys(rules[field] || {});
		const fieldErrors = fieldRules ? fieldRules.map((rule) => {
			const ruleOptions = rules[field][rule];
			const ruleFunction = validators[rule];
			const value = values[field];

			if (ruleFunction) {
				return ruleFunction(value, ruleOptions);
			}

			if (typeof ruleOptions === 'function') {
				return ruleOptions(value);
			}

		}) : [false];

		acc[field] = fieldErrors.filter((error) => !!error)[0] || false;

		return acc;
	}, {});
}

export const containErrors = (errors) =>
	Object.values(errors).some((error) => error === true);
