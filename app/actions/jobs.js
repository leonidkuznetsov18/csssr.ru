import * as C from 'constants/actions';
import request from 'superagent';
import { pushState } from 'redux-router';

export function changeAnswerForm(job, form) {
	return {
		type: C.CHANGE_ANSWER_FORM,
		job,
		form
	};
}

export function sendAnswerForm(job, form) {
	return function(dispatch, getState) {
		const state = getState();
		const form = state.jobs[job].form;
		const formData = new FormData();

		Object.keys(form).forEach(field =>
			formData.append(field, form[field].value)
		);

		dispatch({
			type: C.SEND_ANSWER_FORM,
			job
		});

		request
			.post(`${process.env.HR_DOMAIN}/jobs/${job}/create`)
			.auth(process.env.HR_LOGIN, process.env.HR_PASSWORD)
			.send(formData)
			.end((err, res) => {
				dispatch(pushState(null, '/thanks'));

				dispatch({
					type: C.SENT_ANSWER_FORM,
					job
				});
			});
	}
}

export function showFormErrors(job) {
	return {
		type: C.SHOW_FORM_ERRORS,
		job
	};
}
