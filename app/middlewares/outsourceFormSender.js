import * as C from 'constants/actions';
import {pushState} from 'redux-router';

if (IS_CLIENT) {
	const request = require('superagent');
}

function isFormValid(state) {
	const {form} = state.outsource.form;
	for (const key in form) if (form.hasOwnProperty(key)) {
		if (!form[key].isValid()) {
			return false;
		}
	}
	return true;
};


const requestHandler = store => (err, res) => {
	if (!err && res.status === 200 && res.body.result === 'ok') {
		// TODO: clear form
		store.dispatch(pushState(null, '/thanks'));
	} else {
		// TODO: handle errors
		if (err) {
			console.log(err);
			alert(`ERROR! ${err}`);
			return;
		}
		alert(`error! AAAAA! Status is ${res.status}, result is ${res.body.result}`);
	}
};


function getDataToSend(state) {
	const form = {...state.outsource.form};

	for (const key in form) if (form.hasOwnProperty(key)) {
		form[key] = form[key].value;
	}

	return form;
}


const formSender = store => next => action => {
	const result = next(action);
	const state = store.getState();
	if (action.type === C.OUTSOURCE_FORM_SEND_FORM) {
		if (!isFormValid(state)) {
			return result;
		}
		request
			.post('/outsource')
			.send(getDataToSend(state))
			.end(requestHandler(store));
	}
	return result;
};

export {formSender as default};
