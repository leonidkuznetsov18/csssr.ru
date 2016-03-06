import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Application from 'containers/application';
import Index from 'containers/page-index';
import IndexBanner from 'components/index-banner';
import Company from 'containers/page-company';
import Jobs from 'containers/page-jobs';
import JobsList from 'containers/page-jobs-list';
import Job from 'containers/page-job';
import JobForm from 'containers/page-job-form';
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
		<Route path='/' components={{
			children: Index,
			banner: IndexBanner,
		}} />
		<Route path='/company' component={Company} />
		<Route path='/jobs' component={Jobs}>
			<IndexRoute component={JobsList} />
			<Route path=':jobName' component={Job}>
				<IndexRoute component={JobForm} />
				<Route path='thanks' component={Thanks} />
			</Route>
		</Route>
		<Route path='/order' component={Order} >
			<IndexRoute component={OrderForm} />
			<Route path='thanks' component={Thanks} />
		</Route>
		<Route path='/outsource' component={Outsource}>
			<IndexRoute component={OutsourceForm}/>
			<Route path='thanks' component={Thanks} />
			<Route path=':partner' component={Partner} />
		</Route>
		<Route path='/portfolio' component={Portfolio} >
			<Route path=':project' component={Project} >
				<Route path=':page' component={ProjectPage} />
			</Route>
		</Route>
		<Route path='/offert' component={Offert} />
		<Route path='/confidential' component={Offert} />
		<Route path='/timeline' component={Timeline}>
			<Route path='version/:version' component={PageTimelinePopup} />
			<Route path=':person' component={PageTimelinePopup} />
		</Route>
		<Route path='*' component={PageError}/>
	</Route>
);
