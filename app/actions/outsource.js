import * as C from 'constants/actions';

export function changeContacts(contacts) {
	return {
		type: C.OUTSOURCE_FORM_CHANGE_FORM,
		form: contacts
	};
}

export function showErrors() {
	return {
		type: C.OUTSOURCE_FORM_SHOW_ERRORS
	};
}

export function sendForm() {
	return {
		type: C.OUTSOURCE_FORM_SEND_FORM
	};
}
