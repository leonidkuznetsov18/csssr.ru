import {
	CHANGE_ANSWER_FORM,
	SEND_ANSWER_FORM,
	SENT_ANSWER_FORM,
	SHOW_FORM_ERRORS,
} from 'constants/actions';
import {pushState} from 'redux-router';

let superagent;

if (IS_CLIENT) {
	superagent = require('superagent');
}

export function changeAnswerForm(job, form) {
	return {
		type: CHANGE_ANSWER_FORM,
		job,
		form,
	};
}

export function sendAnswerForm(job) {
	return function (dispatch, getState) {
		const state = getState();
		const form = state.jobs[job].form;
		const formData = new FormData();

		Object.keys(form).forEach((field) =>
			formData.append(field, form[field].value)
		);

		dispatch({
			type: SEND_ANSWER_FORM,
			job,
		});

		superagent
			.post(`${process.env.HR_DOMAIN}/jobs/${job}/create`)
			// .auth('admin', 'password')
			.send(formData)
			.end(() => {
				// TODO: handle errors
				dispatch(pushState(null, `/thanks/${job}`));

				dispatch({
					type: SENT_ANSWER_FORM,
					job,
				});
			});
	};
}

export function showFormErrors(job) {
	return {
		type: SHOW_FORM_ERRORS,
		job,
	};
}
