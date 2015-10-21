import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './routes';
import * as reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';

const reducer = combineReducers(reducers);
const createStoreWithMiddleWare = compose(
	createStore
);
const store = createStoreWithMiddleWare(reducer);

export default function(req) {
	var app;
	var location = createLocation(req.url);

	match({ routes, location }, (error, redirect, renderProps) => {
		app = ReactDOMServer.renderToString(
			<Provider store={store} key='provider'>
				<RoutingContext {...renderProps} />
			</Provider>
		);
	});

	return app;
};
