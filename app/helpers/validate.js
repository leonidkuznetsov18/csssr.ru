class Validate {
	constructor(string) {
		this.string = string;
		this.result = true;
	}

	notEmpty() {
		if (!this.result) return this;

		if (!this.string.length) {
			this.result = false;
		}
		return this;
	};

	isEmail() {
		if (!this.result) return this;

		// email has @ and dot
		if (!/^.+@.+\..+$/.test(this.string)) {
			this.result = false;
		}
		return this;
	}

	isInt() {
		if (!this.result) return this;

		if (!/^-?\d+$/.test(this.string)) {
			this.result = false;
		}
		return this;
	}

	lessThen(length) {
		if (!this.result) return this;

		if (this.string.length >= length) {
			this.result = false;
		}
		return this;
	};

	moreThen(length) {
		if (!this.result) return this;

		if (this.string.length <= length) {
			this.result = false;
		}
		return this;
	};

	end = () => this.result;
}

export default function validate(string) {
	if (typeof string !== 'string') {
		throw new Error('Parameter must be a string');
	}
	return new Validate(string);
}
