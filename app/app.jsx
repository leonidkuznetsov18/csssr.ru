import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import orderFormSender from 'middlewares/orderFormSender';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

const reducer = combineReducers({
	...reducers,
	form: form.normalize({
		job: {
			age: (value) => value && value.replace(/\D/g, ''),
		},
	}),
});

const createStoreWithMiddleWare = compose(
	applyMiddleware(orderFormSender, thunk),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(
	<Provider store={store} key='provider'>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('content')
);
