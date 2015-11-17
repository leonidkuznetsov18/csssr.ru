import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import orderFormSender from 'middlewares/orderFormSender';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import DevTools from 'containers/dev-tools';
import {
	ReduxRouter,
	routerStateReducer,
	reduxReactRouter
} from 'redux-router';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

const reducer = combineReducers({
	router: routerStateReducer,
	...reducers
});

const createStoreWithMiddleWare = compose(
	applyMiddleware(orderFormSender, thunk),
	reduxReactRouter({
		routes,
		createHistory: useScroll(createHistory)
	}),
	DevTools.instrument()
)(createStore);
const store = createStoreWithMiddleWare(reducer, window.__data);

let element;

if (process.env.NODE_ENV === 'development') {
	element = (
		<div id='content'>
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

ReactDOM.render(app, document.getElementById('content'));
