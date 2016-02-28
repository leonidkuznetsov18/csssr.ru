import shortid from 'shortid';

import { ADD_FILES, UPDATE_FILE, REMOVE_FILE, ORDER_FORM_SENT } from 'constants/actions';

export default function order(state = [], action) {
	switch (action.type) {

	case ADD_FILES: {
		return state.concat(action.files.map((file) => ({
			id: shortid.generate(),
			progress: 0,
			file,
		})));
	}

	case UPDATE_FILE: {
		const { fileId, properties } = action;

		return state.map((file) => {
			if (file.id === fileId) {
				file = {
					...file,
					...properties,
				};
			}

			return file;
		});
	}

	case REMOVE_FILE: {
		return state.filter((file) => file.id !== action.fileId);
	}

	case ORDER_FORM_SENT: {
		return [];
	}

	default: return state;
	}
}
