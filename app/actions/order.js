import * as C from 'constants/actions';

export function changeOption(list, value, index, structure = 'checkbox') {
	return {
		type: C.ORDER_FORM_CHANGE_OPTIONS,
		list,
		value,
		index,
		structure
	};
}
