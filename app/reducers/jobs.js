import * as C from 'constants/actions';
import merge from 'helpers/merge';
import validate from 'helpers/validate';
import FormItem from 'helpers/FormItem';

import {jobs as initialState} from './getInitialState';

export default function jobs(state = initialState, action) {
	switch (action.type) {

	case C.CHANGE_ANSWER_FORM: {
		const {job, form} = action;
		if (!state[job]) {
			throw new Error('Invalid job name');
		}
		const newForm = merge(state[job].form);
		for (const key in form) {
			if (form.hasOwnProperty(key)) {
				newForm[key] = newForm[key].update(form[key]);
			}
		}
		const newJob = merge(state[job], {form: newForm});
		return merge(state, {[job]: newJob});
	}

	case C.SEND_ANSWER_FORM: {
		const {job} = action;
		if (!state[job]) {
			throw new Error('Invalid job name');
		}
		return state;
	}

	case C.SHOW_FORM_ERRORS: {
		const {job} = action;
		if (!state[job]) {
			throw new Error('Invalid job name');
		}
		const newForm = merge(state[job].form);
		for (const key in newForm) {
			newForm[key] = newForm[key].update({showError: true});
		}
		const newJob = merge(state[job], {form: newForm});
		return merge(state, {[job]: newJob});
	}


	default:
		return state;
	}
}
