import * as C from 'constants/actions';

export function changeAnswerForm(job, form) {
	return {
		type: C.CHANGE_ANSWER_FORM,
		job,
		form
	};
}

export function sendAnswerForm(job, form) {
	return {
		type: C.SEND_ANSWER_FORM,
		job
	};
}

export function showFormErrors(job) {
	return {
		type: C.SHOW_FORM_ERRORS,
		job
	};
}
