import React from 'react';
import ReactDOM from 'react-dom';
import { withContext } from 'recompose';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import store from './store';
import routes from './routes';
import decorateConsole from './utils/consoleDecorator';
import { NODE_ENV as PRODUCTION } from '../config/env.production';

if (process.env.NODE_ENV === PRODUCTION) {
	decorateConsole();
}

const history = syncHistoryWithStore(browserHistory, store);
const isPopup = (url, location) => {
	const toPopup = location.action === 'PUSH' && location.pathname.indexOf(`${url}/`) === 0;
	const fromPopup = location.action === 'POP' && location.pathname === url;

	return toPopup || fromPopup;
};

const App = () => (
	<Provider store={store}>
		<Router
			history={history}
			render={applyRouterMiddleware(
				useScroll((prevRouterProps, currentRouterProps) => {
					const { location } = currentRouterProps;
					const isTimelinePopup = isPopup('/timeline', location);

					if (isTimelinePopup) {
						return false;
					}

					return true;
				})
			)}
			routes={routes}
		/>
	</Provider>
);

const ProvideApp = withContext(
	{
		insertCss: React.PropTypes.func,
	},
	() => ({
		insertCss: (styles) => styles._insertCss(), // eslint-disable-line no-underscore-dangle
	}),
	App
);

ReactDOM.render(
	<ProvideApp />,
	document.getElementById('content')
);
