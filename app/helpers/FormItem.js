export default class FormItem {
	constructor(value, validateFunction, showError = false) {
		this.value = value;
		this.validate = validateFunction;
		this.showError = showError;
	}

	update({value, validateFunction, showError}) {
		if (value !== undefined) this.value = value;
		if (validateFunction !== undefined) this.validateFunction = validateFunction;
		if (showError !== undefined) this.showError = showError;
	}

	toString = () => this.value
	isValid = () => this.validate(this.value)
}
