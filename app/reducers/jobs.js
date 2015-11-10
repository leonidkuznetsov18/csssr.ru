import * as C from 'constants/actions';

import {jobs as initialState} from './getInitialState';

export default function jobs(state = initialState, action) {
	const {job, form} = action;

	switch (action.type) {

	case C.CHANGE_ANSWER_FORM: {
		const newForm = {...state[job].form};

		for (const key in form) {
			if (!form.hasOwnProperty(key)) {
				return;
			}

			newForm[key] = newForm[key].update(form[key]);
		}

		const isValid = Object.keys(newForm).every(field => {
			return newForm[field].isValid()
		})

		return {
			...state,
			[job]: {
				...state[job],
				isValid,
				form: newForm
			}
		};
	}

	case C.SEND_ANSWER_FORM: {
		return {
			...state,
			[job]: {
				...state[job],
				send: true,
			}
		}
	}

	case C.SENT_ANSWER_FORM: {
		return {
			...state,
			[job]: {
				...initialState[job],
			}
		}
	}

	case C.SHOW_FORM_ERRORS: {
		const newForm = {...state[job].form};
		for (const key in newForm) {
			newForm[key] = newForm[key].update({showError: true});
		}

		return {
			...state,
			[job]: {
				...state[job],
				form: newForm
			}
		};
	}

	default:
		return state;
	}
}
