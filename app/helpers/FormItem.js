export default class FormItem {
	constructor(value, validateFunction, showError = false) {
		this.value = value;
		this.validate = validateFunction;
		this.showError = showError;
	}

	update({value, validateFunction, showError}) {
		const formItem = Object.create(this);
		if (value !== undefined) formItem.value = value;
		if (validateFunction !== undefined) formItem.validate = validateFunction;
		if (showError !== undefined) formItem.showError = showError;
		return new FormItem(formItem.value, formItem.validate, formItem.showError);
	}

	toString = () => this.value
	isValid = () => this.validate(this.value)
}
