import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './routes';
import * as reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';

const reducer = combineReducers(reducers);
const createStoreWithMiddleWare = compose(
	createStore
);
const store = createStoreWithMiddleWare(reducer);

export default function (req) {
	let app;

	match({ routes, location: req.url }, (error, redirect, renderProps) => {
		app = ReactDOMServer.renderToString(
			<Provider store={store} key='provider'>
				<RouterContext {...renderProps} />
			</Provider>
		);
	});

	return app;
}
