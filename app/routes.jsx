import React from 'react';
import { Route } from 'react-router';
import Application from 'components/application';
import Index from 'components/index';
import Company from 'components/company';
import Vacancy from 'components/vacancy';
import Order from 'components/order';
import Outsource from 'components/outsource';
import Offert from 'components/offert';
import Portfolio from 'components/portfolio';

export default (
	<Route name='root' component={Application}>
		<Route path='/' name='index' component={Index} />
		<Route path='/company.html' name='company' component={Company} />
		<Route path='/vacancy.html' name='vacancy' component={Vacancy} />
		<Route path='/order.html' name='order' component={Order} />
		<Route path='/outsource.html' name='outsource' component={Outsource} />
		<Route path='/portfolio.html' name='portfolio' component={Portfolio} />
		<Route path='/offert.html' name='offert' component={Offert} />
		<Route path='/confidential.html' name='confidential' component={Offert} />
	</Route>
);
