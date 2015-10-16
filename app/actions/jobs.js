export function addJob(name) {
	return {
		type: 'ADD_JOB',
		name
	};
}

export function changeAnswerForm(job, form) {
	return {
		type: 'CHANGE_ANSWER_FORM',
		job,
		form
	};
}
