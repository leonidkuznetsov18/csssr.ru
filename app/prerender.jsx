import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
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
const store = createStoreWithMiddleWare(reducer);

module.exports = function(req) {
	var app;
	var location = new Location(req.path, req.query);

	Router.run(routes, location, (error, initialState, transition) => {
		app = React.renderToString(
			<Provider store={store} key='provider'>
				{() => <Router {...initialState} /> }
			</Provider>
		);
	});

	return app;
};
