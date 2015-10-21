import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import * as C from 'constants/actions';
import {addJob} from 'actions/jobs';
import routes from './routes';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'helpers/promiseMiddleware';

// remove it in production
const logMiddleware = () => next => action => {
	if (localStorage.debug === 'true') {
		console.log(action);
	}
	return next(action);
};

const sendAnswerFormMiddleware = currentStore => next => action => {
	if (action.type === C.SEND_ANSWER_FORM) {
		const data = currentStore.getState().jobs[action.job].form;
		// send data to server here
		console.log('send it to server:', data);
	}
	return next(action);
};

const reducer = combineReducers(reducers);
const createStoreWithMiddleWare = compose(
	applyMiddleware(promiseMiddleware, logMiddleware, sendAnswerFormMiddleware),
	createStore
);

// while we don't have server-side rendering
const initialStore = createStoreWithMiddleWare(reducer);
initialStore.dispatch(addJob('technical_manager'));
initialStore.dispatch(addJob('pixel_perfectionist'));
window.__data = initialStore.getState();


const store = createStoreWithMiddleWare(reducer, window.__data);
const history = new BrowserHistory();
const element = (
	<Provider store={store} key='provider'>
		{() => <Router history={history} children={routes}/> }
	</Provider>
);

// not react way
require('smooth-scroll').init();

React.render(element, document.getElementById('content'));
