import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import files from './files.js';

export default combineReducers({
	files,
	form: form.normalize({
		job: {
			age: (value) => value && value.replace(/\D/g, ''),
		},
	}),
});
