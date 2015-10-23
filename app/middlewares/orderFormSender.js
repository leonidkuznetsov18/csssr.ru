import request from 'superagent';
import * as C from 'constants/actions';


function isMaketsExist(state) {
	const {files, filesLink} = state.order.form;
	return !!(files.length || filesLink);
}

function isFilesLoaded(state) {
	return !!state.order.form.files.reduce((p, n) => p && n.path, true);
}

function isOnlyLink(state) {
	const {files, filesLink} = state.order.form;
	return !files.length && !!filesLink;
}

function isContactsValid(state) {
	const {contacts} = state.order.form;
	for (const key in contacts) if (contacts.hasOwnProperty(key)) {
		if (!contacts[key].isValid()) {
			return false;
		}
	}
	return true;
};


function requestHandler(err, res) {
	if (err) throw err;
	// TODO: clear form and show success message
	console.log('order form response:', res);
}


function getDataToSend(state) {
	const {form} = state.order;
	const {filesLink} = form;

	const options = {...form.options};
	for (const key in options) if (options.hasOwnProperty(key)) {
		options[key] = options[key]
			.filter(option => option.isChecked)
			.map(option => option.name);
	}

	const contacts = {...form.contacts};
	for (const key in contacts) if (contacts.hasOwnProperty(key)) {
		contacts[key] = contacts[key].value;
	}

	const files = form.files.map(file => file.path);

	return {
		options,
		contacts,
		files,
		filesLink
	};
}


const formSender = store => next => action => {
	const result = next(action);
	const state = store.getState();
	if (action.type === C.ORDER_FORM_SEND_FORM) {
		if (!(
			isMaketsExist(state) &&
			(isFilesLoaded(state) || isOnlyLink(state)) &&
			isContactsValid(state)
		)) {
			return result;
		}
		request
			.post('/order')
			.send(getDataToSend(state))
			.end(requestHandler);
	}
	return result;
};

export {formSender as default};
