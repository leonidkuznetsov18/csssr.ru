import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { createStore, compose } from 'redux';
import routes from './routes';
import reducer from './reducers';

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
