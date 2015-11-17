import * as C from 'constants/actions';
import {pushState} from 'redux-router';

let superagent;

if (IS_CLIENT) {
	superagent = require('superagent');
}

function isMaketsExist(state) {
	const {files, filesLink} = state.order.form;
	return !!(files.length || filesLink);
}

function isFilesLoaded(state) {
	return !!state.order.form.files.reduce((p, n) => p && n.filename, true);
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


const requestHandler = store => (err, res) => {
	if (err) throw err;
	if (res.status === 200 && res.body.result === 'ok') {
		// TODO: clear form
		store.dispatch(pushState(null, '/thanks/order'));
	} else {
		// TODO: handle errors
		alert(`error! AAAAA! Status is ${res.status} and result is ${res.body.result}`);
	}
};


function getDataToSend(state) {
	const {form} = state.order;
	const {filesLink} = form;

	const options = {...form.options};
	for (const key in options) if (options.hasOwnProperty(key)) {
		options[key] = options[key]
			.filter(option => option.isChecked)
			.map(option => option.name);
	}

	let optionsArray = [];
	for (const key in form.options) if (form.options.hasOwnProperty(key)) {
		optionsArray = optionsArray.concat(
			form.options[key]
				.filter(option => option.isChecked)
				.map(option => option.value)
		);
	}

	const contacts = {...form.contacts};
	for (const key in contacts) if (contacts.hasOwnProperty(key)) {
		contacts[key] = contacts[key].value;
	}

	const files = form.files.map(file => ({
		filename: file.filename,
		originalname: file.originalname
	}));

	return {
		options,
		optionsArray,
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
		superagent
			.post('/order')
			.send(getDataToSend(state))
			.end(requestHandler(store));
	}
	return result;
};

export {formSender as default};
