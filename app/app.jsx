import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import orderFormSender from 'middlewares/orderFormSender';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
	ReduxRouter,
	routerStateReducer,
	reduxReactRouter,
} from 'redux-router';

const reducer = combineReducers({
	router: routerStateReducer,
	...reducers,
});

const createStoreWithMiddleWare = compose(
	applyMiddleware(orderFormSender, thunk),
	reduxReactRouter({
		routes,
		createHistory,
	}),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(
	<Provider store={store} key='provider'>
		<ReduxRouter routes={routes}/>
	</Provider>,
	document.getElementById('content')
);
