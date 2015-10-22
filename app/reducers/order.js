import * as C from 'constants/actions';

import {order as initialState} from './getInitialState';

export default function order(state = initialState, action) {
	switch (action.type) {

	case C.ORDER_FORM_CHANGE_OPTIONS: {
		if (!state.form.options[action.list]) {
			throw new Error('ORDER_FORM_CHANGE_OPTIONS: List is invalid');
		}
		if (!state.form.options[action.list][action.index]) {
			throw new Error('ORDER_FORM_CHANGE_OPTIONS: Index is invalid');
		}

		const newState = {...state};
		newState.form.options[action.list][action.index].isChecked = action.value;
		return newState;
	}

	default:
		return state;
	}
}
