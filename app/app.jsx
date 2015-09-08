import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'helpers/promiseMiddleware';

const reducer = combineReducers(reducers);
const createStoreWithMiddleWare = compose(
	applyMiddleware(promiseMiddleware),
	createStore
);
const store = createStoreWithMiddleWare(reducer, window.__data);
const history = new BrowserHistory();
const element = (
	<Provider store={store} key='provider'>
		{() => <Router history={history} children={routes}/> }
	</Provider>
);

require('smooth-scroll').init();

React.render(element, document.getElementById('content'));
