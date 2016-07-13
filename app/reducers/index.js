import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import files from './files';
import vacancies from './vacancies';

export default combineReducers({
	files,
	vacancies,
	routing: routerReducer,
	form: form.normalize({
		job: {
			age: (value) => value && value.replace(/\D/g, ''),
		},
	}),
});
