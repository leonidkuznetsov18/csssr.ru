import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import files from './files.js';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	files,
	routing: routerReducer,
	form: form.normalize({
		job: {
			age: (value) => value && value.replace(/\D/g, ''),
		},
	}),
});
