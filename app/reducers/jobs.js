function merge(...data) {
	return Object.assign({}, ...data);
}

export default function jobs(state = {}, action) {
	switch (action.type) {

	case 'ADD_JOB': {
		const newJob = {
			name: action.name,
			form: {
				name: '',
				surname: '',
				age: '',
				city: '',
				filename: 'Прикрепите файл',
				filepath: null,
				email: '',
				skype: '',
				phone: ''
			}
		};
		return merge(state, {[action.name]: newJob});
	}

	case 'CHANGE_ANSWER_FORM': {
		const {job, form} = action;
		if (!state[job]) {
			throw new Error('Invalid job name');
		}
		const newForm = merge(state[job].form, form);
		const newJob = merge(state[job], {form: newForm});
		return merge(state, {[job]: newJob});
	}

	default:
		return state;
	}
}
