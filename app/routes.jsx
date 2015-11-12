import React from 'react';
import { Route } from 'react-router';
import Application from 'containers/application';
import Index from 'containers/page-index';
import IndexBanner from 'components/index-banner';
import Company from 'containers/page-company';
import Jobs from 'containers/page-jobs';
import Job from 'containers/page-job';
import Order from 'containers/page-order';
import Outsource from 'containers/page-outsource';
import Partner from 'containers/page-partner';
import Offert from 'containers/page-offert';
import Thanks from 'containers/page-thanks';
import Portfolio from 'containers/page-portfolio';
import Project from 'containers/page-project';
import ProjectPage from 'containers/page-project-page';
import Timeline from 'containers/page-timeline';
import PageTimelinePopup from 'containers/page-timeline-popup';
import VersionPopup from 'containers/popup-version';
import Error404 from 'containers/error-404';
import Error403 from 'containers/error-403';
import Error500 from 'containers/error-500';
import Error502 from 'containers/error-502';

export default (
	<Route name='root' component={Application}>
		<Route path='/' name='index' components={{
			children: Index,
			banner: IndexBanner
		}} />
		<Route path='/company' name='company' component={Company} />
		<Route path='/jobs' name='jobs' component={Jobs} />
		<Route path='/jobs/:jobName' component={Job} />
		<Route path='/order' name='order' component={Order} />
		<Route path='/outsource' name='outsource' component={Outsource}>
			<Route path=':partner' name='partner' component={Partner} />
		</Route>
		<Route path='/portfolio' name='portfolio' component={Portfolio} >
			<Route path=':project' name='project' component={Project} >
				<Route path=':page' name='page' component={ProjectPage} />
			</Route>
		</Route>
		<Route path='/thanks' name='thanks' component={Thanks} />
		<Route path='/offert' name='offert' component={Offert} />
		<Route path='/confidential' name='confidential' component={Offert} />
		<Route path='/timeline' name='timeline' component={Timeline}>
			<Route path='version/:version' name='version' component={VersionPopup} />
			<Route path=':person' name='person' component={PageTimelinePopup} />
		</Route>
		<Route path='/403' component={Error403}/>
		<Route path='/500' component={Error500}/>
		<Route path='/502' component={Error502}/>
		<Route path='*' component={Error404}/>
	</Route>
);
