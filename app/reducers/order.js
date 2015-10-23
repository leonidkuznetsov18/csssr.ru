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
		const contacts = {...state.form.contacts};
		for (const key in action.contacts) if (action.contacts.hasOwnProperty(key)) {
			contacts[key] = contacts[key].update(action.contacts[key]);
		}

		return {
			...state,
			form: {
				...state.form,
				contacts
			}
		};
	}

	case C.ORDER_FORM_SHOW_ERRORS: {
		const contacts = {...state.form.contacts};
		for (const key in contacts) if (contacts.hasOwnProperty(key)) {
			contacts[key] = contacts[key].update({showError: true});
		}

		return {
			...state,
			form: {
				...state.form,
				contacts
			}
		};
	}

	case C.ORDER_FORM_CHANGE_FILES_LINK: {
		const filesLink = action.link;
		return {
			...state,
			form: {
				...state.form,
				filesLink
			}
		};
	}

	case C.ORDER_FORM_ADD_FILES: {
		const files = state.form.files.concat(action.files);
		return {
			...state,
			form: {
				...state.form,
				files
			}
		};
	}

	case C.ORDER_FORM_REMOVE_FILE: {
		const {fileId} = action;
		return {
			...state,
			form: {
				...state.form,
				files
			}
		};
	}

	case C.ORDER_FORM_UPDATE_FILE_PROGRESS: {
		const {fileId, progress} = action;
		return {
			...state,
			form: {
				...state.form,
				files
			}
		};
	}

	default:
		return state;
	}
}
