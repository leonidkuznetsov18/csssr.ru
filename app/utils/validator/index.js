import rEmail from 'regex-email';

const defaultRule = {
	required: true,
	maxlength: 100,
};

const defaultRules = {
	name: {
		required: false,
		maxlength: 100,
	},
	firstname: defaultRule,
	location: defaultRule,
	lastname: defaultRule,
	resume: defaultRule,
	portfolio: defaultRule,

	age: {
		required: true,
		maxlength: 3,
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
		required: true,
		minlength: 12,
		maxlength: 13,
	},
};

const validators = {
	email: (value = '') => !!rEmail && !rEmail.test(value),
	required: (value = '') => value.length === 0,
	minlength: (value, length) => !!value && value.length < length,
	maxlength: (value, length) => !!value && value.length > length,
	regexp: (value, regexp) => !!value && !regexp.test(value),
	file: (value, fileSpec) => {
		const file = value && value[0];

		if (!value || !file || !fileSpec.regexp.test(file.name)) {
			return fileSpec.fileWarning;
		} else if (file.size > fileSpec.maxSize) {
			return fileSpec.fileWarningSize;
		}
	},
};

export default function validator(values, customRules = {}) {
	const valuesName = Object.keys(values);
	return valuesName.reduce((acc, field) => {
		const rules = {
			...defaultRules[field],
			...customRules[field],
		};

		const fieldRules = Object.keys(rules);
		const fieldErrors = fieldRules ? fieldRules.map((rule) => {
			const ruleOptions = rules[rule];
			const ruleFunction = validators[rule];
			const value = values[field];

			if (ruleOptions === false) {
				return false;
			}

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
