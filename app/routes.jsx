import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import Application from 'containers/application';
import Index from 'containers/page-index';
import Company from 'containers/page-company';
import Jobs from 'containers/page-jobs';
import JobsList from 'containers/page-jobs-list';
import Job from 'containers/page-job';
import JobPreview from 'containers/page-job-preview';
import JobActive from 'containers/page-job-active';
import Order from 'containers/page-order';
import OrderForm from 'containers/page-order-form';
import Outsource from 'containers/page-outsource';
import OutsourceForm from 'containers/page-outsource-form';
import Partner from 'containers/page-partner';
import Offert from 'containers/page-offert';
import Thanks from 'containers/page-thanks';
import Portfolio from 'containers/page-portfolio';
import Project from 'containers/page-project';
import ProjectPage from 'containers/page-project-page';
import Timeline from 'containers/page-timeline';
import PageTimelinePopup from 'containers/page-timeline-popup';
import PageError from 'containers/page-error';

export default (
	<Route component={Application}>
		<Route component={Index} path='/' />
		<Route component={Company} path='/company' />
		<Route component={Jobs} path='/jobs'>
			<IndexRoute component={JobsList} />
			<Route component={JobPreview} path='preview/:jobName' />
			<Route component={Job} path=':jobName'>
				<IndexRoute component={JobActive} />
				<Route component={Thanks} path='thanks' />
			</Route>
		</Route>
		<Route component={Order} path='/order' >
			<IndexRoute component={OrderForm} />
			<Route component={Thanks} path='thanks' />
		</Route>
		<Route component={Outsource} path='/outsource'>
			<IndexRoute component={OutsourceForm} />
			<Route component={Thanks} path='thanks' />
			<Route component={Partner} path=':partner' />
		</Route>
		<Route component={Portfolio} path='/portfolio' >
			<Route component={Project} path=':project' >
				<Route component={ProjectPage} path=':page' />
			</Route>
		</Route>
		<Route component={Offert} path='/offert' />
		<Route component={Offert} path='/confidential' />
		<Route component={Offert} path='/estimate-offert' />
		<Route component={Timeline} path='/timeline'>
			<Route component={PageTimelinePopup} path='version/:version' />
			<Route component={PageTimelinePopup} path=':person' />
		</Route>
		<Redirect from='/vacancy' to='/jobs' />
		<Route component={PageError} path='*' />
	</Route>
);
