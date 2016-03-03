import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import routes from './routes';
import reducer from './reducers';

const createStoreWithMiddleWare = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(
	<Provider store={store} key='provider'>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('content')
);
