import React from 'react';
import { withContext } from 'recompose';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import routes from './routes';
import createStore from './store';


function fetchData(renderProps, store) {
	const { params } = renderProps;

	return new Promise(function (resolve) {
		const component = renderProps.components[renderProps.components.length - 1];

		if (component.fetchData) {
			resolve(component.fetchData({ params, store }));
		} else {
			resolve();
		}
	});
}

export default function (req, response) {
	return new Promise((resolve) => {
		const rendered = {
			css: [],
		};

		let store = createStore();

		match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
			if (redirectLocation) {
				response.redirect(301, redirectLocation.pathname + redirectLocation.search);
				return;
			}

			fetchData(renderProps, store).then(() => {
				const storeWithState = createStore({
					initialState: store.getState(),
				});

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
						insertCss: (styles) => rendered.css.push(styles._getCss()), // eslint-disable-line no-underscore-dangle
					}),
					App
				);

				rendered.state = storeWithState.getState();
				rendered.content = ReactDOMServer.renderToString(
					<ProvideApp />
				);
				rendered.head = Helmet.rewind();

				resolve(rendered);
			});

		});
	});
}
