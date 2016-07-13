import React from 'react';
import ReactDOM from 'react-dom';
import { withContext } from 'recompose';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'use-scroll-behavior';
import store from './store';
import routes from './routes';
import decorateConsole from './utils/consoleDecorator';
import { NODE_ENV as PRODUCTION } from '../config/env.production';

if (process.env.NODE_ENV === PRODUCTION) {
	decorateConsole();
}

const history = syncHistoryWithStore(useScroll(browserHistory), store);

const App = () => (
	<Provider store={store}>
		<Router history={history} routes={routes} />
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
