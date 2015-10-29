import * as C from 'constants/actions';

import {outsource as initialState} from './getInitialState';

export default function outsource(state = initialState, action) {
	switch (action.type) {

	case C.OUTSOURCE_FORM_CHANGE_FORM: {
		const form = {...state.form};
		for (const key in action.form) if (action.form.hasOwnProperty(key)) {
			form[key] = form[key].update(action.form[key]);
		}

		return {
			...state,
			form
		};
	}

	case C.OUTSOURCE_FORM_SHOW_ERRORS: {
		const form = {...state.form};
		for (const key in form) if (form.hasOwnProperty(key)) {
			form[key] = form[key].update({showError: true});
		}

		return {
			...state,
			form
		};
	}

	default:
		return state;
	}
}
