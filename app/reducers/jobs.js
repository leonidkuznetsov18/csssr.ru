import * as C from 'constants/actions';
import merge from 'helpers/merge';
import validate from 'helpers/validate';
import FormItem from 'helpers/FormItem';


export default function jobs(state = {}, action) {
	switch (action.type) {

	case C.ADD_JOB: {
		const newJob = {
			name: action.name,
			form: {
				name: new FormItem('', value => validate(value).notEmpty().lessThen(100).end()),
				surname: new FormItem('', value => validate(value).notEmpty().lessThen(100).end()),
				age: new FormItem('', value => validate(value).notEmpty().lessThen(4).isInt().end()),
				city: new FormItem('', value => validate(value).lessThen(100).notEmpty().end()),
				filename: new FormItem('Прикрепите файл'),
				filepath: new FormItem('', value => validate(value).notEmpty().end()),
				email: new FormItem('', value => validate(value).isEmail().lessThen(100).notEmpty().end()),
				skype: new FormItem('', value => validate(value).lessThen(100).notEmpty().end()),
				phone: new FormItem('', value => validate(value).moreThen(5).lessThen(100).notEmpty().end())
			}
		};
		return merge(state, {[action.name]: newJob});
	}

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
