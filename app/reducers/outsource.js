import * as C from 'constants/actions';

import {outsource as initialState} from './getInitialState';

export default function outsource(state = initialState, action) {
	switch (action.type) {

	case C.OUTSOURCE_FORM_CHANGE_FORM: {
		const newForm = {
			...state.form,
		};

		for (const key in newForm) {
			if (!action.form.hasOwnProperty(key)) {
				continue;
			}

			newForm[key] = newForm[key].update(action.form[key]);
		}

		const isValid = Object.keys(newForm).every((field) => {
			return newForm[field].isValid();
		});

		return {
			...state,
			form: newForm,
			isValid,
		};
	}

	case C.OUTSOURCE_FORM_SHOW_ERRORS: {
		const newForm = {
			...state.form,
		};

		for (const key in newForm) {
			if (!newForm.hasOwnProperty(key)) {
				continue;
			}

			newForm[key] = newForm[key].update({
				showError: true,
			});
		}

		return {
			...state,
			form: newForm,
		};
	}

	case C.OUTSOURCE_FORM_SENT_FORM: {
		return initialState;
	}

	default:
		return state;
	}
}
