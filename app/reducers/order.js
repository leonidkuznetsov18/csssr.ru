import * as C from 'constants/actions';

import {order as initialState} from './getInitialState';

export default function order(state = initialState, action) {
	switch (action.type) {

	case C.ORDER_FORM_CHANGE_OPTIONS: {
		const options = {...state.form.options};
		if (!(options[action.list] instanceof Array)) {
			throw new Error('ORDER_FORM_CHANGE_OPTIONS: List is invalid');
		}
		if (!options[action.list][action.index]) {
			throw new Error('ORDER_FORM_CHANGE_OPTIONS: Index is invalid');
		}

		if (action.structure === 'radio') {
			options[action.list] = options[action.list].map(item => {
				item.isChecked = false;
				return item;
			});
		}
		options[action.list][action.index].isChecked = action.value;

		return {
			...state,
			form: {
				...state.form,
				...options
			}
		};
	}

	case C.ORDER_FORM_CHANGE_CONTACTS: {
		return {
			...state,
			form: {
				...state.form,
				contacts: {
					...state.form.contacts,
					...action.contacts
				}
			}
		};
	}

	default:
		return state;
	}
}
