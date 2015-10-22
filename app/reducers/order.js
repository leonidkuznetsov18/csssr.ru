import * as C from 'constants/actions';

import {order as initialState} from './getInitialState';

export default function order(state = initialState, action) {
	switch (action.type) {

	case C.ORDER_FORM_CHANGE_OPTIONS: {
		const newState = {...state};
		newState.form.options[action.list][action.i].isChecked = action.value;
		return newState;
	}

	default:
		return state;
	}
}
