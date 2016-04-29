import React from 'react';
import Helmet from 'react-helmet';
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

export default function (req, response) {
	const rendered = {};

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (redirectLocation) {
			response.redirect(301, redirectLocation.pathname + redirectLocation.search);
			return;
		}

		rendered.content = ReactDOMServer.renderToString(
			<Provider store={store} key='provider'>
				<RouterContext {...renderProps} />
			</Provider>
		);

		rendered.head = Helmet.rewind();
	});

	return rendered;
}
