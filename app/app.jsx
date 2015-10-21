import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import DevTools from 'containers/dev-tools';
import {
	ReduxRouter,
	routerStateReducer,
	reduxReactRouter
} from 'redux-router';

require('smooth-scroll').init();

const reducer = combineReducers({
	router: routerStateReducer,
	...reducers
});
const createStoreWithMiddleWare = compose(
	reduxReactRouter({
		routes,
		createHistory
	}),
	DevTools.instrument()
)(createStore);
const store = createStoreWithMiddleWare(reducer, window.__data);

let element;
if (NODE_ENV !== 'production') {
	element = (
		<div>
			<ReduxRouter routes={routes}/>
			<DevTools/>
		</div>
	);
} else {
	element = <ReduxRouter routes={routes}/>;
}

const app = (
	<Provider store={store} key='provider'>
		{element}
	</Provider>
);

require('smooth-scroll').init();

ReactDOM.render(app, document.getElementById('content'));
