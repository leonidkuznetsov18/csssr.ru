import * as C from 'constants/actions';

import {order as initialState} from './getInitialState';

let lastId = 0;

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
			options[action.list] = options[action.list].map((item) => {
				item.isChecked = false;
				return item;
			});
		}
		options[action.list][action.index].isChecked = action.value;

		return {
			...state,
			form: {
				...state.form,
				...options,
			},
		};
	}

	case C.ORDER_FORM_CHANGE_CONTACTS: {
		const contacts = {
			...state.form.contacts,
		};

		for (const key in action.contacts) {
			if (!action.contacts.hasOwnProperty(key)) {
				continue;
			}

			contacts[key] = contacts[key].update(action.contacts[key]);
		}

		const isValid = Object.keys(contacts).every((field) => {
			return contacts[field].isValid();
		});

		return {
			...state,
			form: {
				...state.form,
				showErrorWindow: false,
				isValid,
				contacts,
			},
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
				showErrorWindow: true,
				contacts,
			},
		};
	}

	case C.ORDER_FORM_CHANGE_FILES_LINK: {
		const filesLink = action.link;
		return {
			...state,
			form: {
				...state.form,
				showErrorWindow: false,
				filesLink,
			},
		};
	}

	case C.ORDER_FORM_ADD_FILES: {
		const files = state.form.files.concat(action.files.map((file) => {
			file.id = lastId++;
			file.progress = 0;
			return file;
		}));

		return {
			...state,
			form: {
				...state.form,
				showErrorWindow: false,
				files,
			},
		};
	}

	case C.ORDER_FORM_REMOVE_FILE: {
		const files = state.form.files.filter((file) => file.id !== action.fileId);
		return {
			...state,
			form: {
				...state.form,
				showErrorWindow: false,
				files,
			},
		};
	}

	case C.ORDER_FORM_UPDATE_FILE: {
		const {fileId, properties} = action;
		let fileIdIsCorrect = false;

		const files = state.form.files.map((file) => {
			if (file.id === fileId) {
				fileIdIsCorrect = true;
				for (const key in properties) if (properties.hasOwnProperty(key)) {
					file[key] = properties[key];
				}
			}
			return file;
		});

		if (!fileIdIsCorrect) {
			return state;
		}

		return {
			...state,
			form: {
				...state.form,
				files,
			},
		};
	}

	case C.ORDER_FORM_SENT_FORM: {
		return initialState
	}

	default:
		return state;
	}
}
