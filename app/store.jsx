import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';

import reducer from './reducers';
import { routerMiddleware } from 'react-router-redux';

const createStoreWithMiddleWare = compose(
	applyMiddleware(
		thunk,
		routerMiddleware(browserHistory)
	),
	global.devToolsExtension ? global.devToolsExtension() : (f) => f,
)(createStore);
export default createStoreWithMiddleWare(reducer);
