import React from 'react';
import { withContext } from 'recompose';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import routes from './routes';
import store from './store';

export default function (req, response) {
	const rendered = {
		css: [],
	};

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (redirectLocation) {
			response.redirect(301, redirectLocation.pathname + redirectLocation.search);
			return;
		}

		const App = () => (
			<Provider store={store}>
				<RouterContext {...renderProps} />
			</Provider>
		);

		const ProvideApp = withContext(
			{
				insertCss: React.PropTypes.func,
			},
			() => ({
				insertCss: (styles) => rendered.css.push(styles._getCss()),
			}),
			App
		);

		rendered.content = ReactDOMServer.renderToString(
			<ProvideApp/>
		);

		rendered.head = Helmet.rewind();
	});

	return rendered;
}
