import {
	OUTSOURCE_FORM_CHANGE_FORM,
	OUTSOURCE_FORM_SHOW_ERRORS,
	OUTSOURCE_FORM_SEND_FORM,
	OUTSOURCE_FORM_SENT_FORM,
} from 'constants/actions';
import {pushState} from 'redux-router';

let superagent;

if (IS_CLIENT) {
	superagent = require('superagent');
}

export function changeContacts(contacts) {
	return {
		type: OUTSOURCE_FORM_CHANGE_FORM,
		form: contacts,
	};
}

export function showErrors() {
	return {
		type: OUTSOURCE_FORM_SHOW_ERRORS,
	};
}

export function sendForm() {
	return function (dispatch, getState) {
		const state = getState();
		const form = state.outsource.form;
		const formData = {};

		dispatch({
			type: OUTSOURCE_FORM_SEND_FORM,
		});

		Object.keys(form).forEach((field) =>
			formData[field] = form[field].value
		);

		superagent
			.post('/outsource')
			.send(formData)
			.end(() => {
				// TODO: handle errors
				dispatch(pushState(null, '/thanks/outsource'));

				dispatch({
					type: OUTSOURCE_FORM_SENT_FORM,
				});
			});
	};
}
