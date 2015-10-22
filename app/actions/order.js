import * as C from 'constants/actions';

export function changeOption(list, value, index, structure = 'checkbox') {
	return {
		type: C.ORDER_FORM_CHANGE_OPTIONS,
		list,
		value,
		index,
		structure
	};
}

export function changeContacts(contacts) {
	return {
		type: C.ORDER_FORM_CHANGE_CONTACTS,
		contacts
	};
}

export function showErrors() {
	return {
		type: C.ORDER_FORM_SHOW_ERRORS
	};
}

export function changeFilesLink(link) {
	return {
		type: C.ORDER_FORM_CHANGE_FILES_LINK,
		link
	};
}
