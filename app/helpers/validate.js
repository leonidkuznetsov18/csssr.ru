const validator = {
	required(value) {
		return value.length;
	},

	maxlength(value, length) {
		return value.length <= length;
	},

	email(value) {
		return /^.+@.+\..+$/.test(value);
	},

	number(value) {
		return /^-?\d+$/.test(value);
	},

	minlength(value, length) {
		return value.length >= length;
	},

	custom(value, fn) {
		return fn(value);
	},
};

export default function validate(value, options) {
	const isValid = Object.keys(options).every((key) => {
		if (validator[key]) {
			return validator[key](value, options[key]);
		} else {
			throw new Error(`Undefined validator ${key}`);
		}

		return true;
	});

	return isValid;
}
