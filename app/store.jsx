import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers';
import { routerMiddleware } from 'react-router-redux';

const middlewares = compose(
	applyMiddleware(
		thunk,
		promiseMiddleware(),
		routerMiddleware(browserHistory)
	),
	global.devToolsExtension ? global.devToolsExtension() : (f) => f,
);

export default ({ initialState } = {}) => createStore(reducer, initialState, middlewares);
