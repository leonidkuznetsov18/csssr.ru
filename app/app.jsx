import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import routes from './routes';
import reducer from './reducers';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import useScroll from 'use-scroll-behavior';

const createStoreWithMiddleWare = compose(
	applyMiddleware(
		thunk,
		routerMiddleware(useScroll(browserHistory))
	),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore);
const store = createStoreWithMiddleWare(reducer);
const history = syncHistoryWithStore(useScroll(browserHistory), store);

ReactDOM.render(
	<Provider store={store} key='provider'>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('content')
);
