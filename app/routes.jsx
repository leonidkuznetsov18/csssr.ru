import React from 'react';
import { Route } from 'react-router';
import Application from 'components/application';
import Index from 'components/index';
import Company from 'components/company';
import Jobs from 'components/jobs';
import JobWrapper from 'components/job-wrapper';
import TechnicalManager from 'components/job-technical-manager';
import PixelPerfectionist from 'components/job-pixel-perfectionist';
import Order from 'components/order';
import Outsource from 'components/outsource';
import Offert from 'components/offert';
import Portfolio from 'components/portfolio';
import Project from 'components/project';
import ProjectPage from 'components/project-page';
import Timeline from 'components/timeline';

export default (
	<Route name='root' component={Application}>
		<Route path='/' name='index' component={Index} />
		<Route path='/company' name='company' component={Company} />
		<Route path='/jobs' name='jobs' component={Jobs} />
		<Route path='/jobs' component={JobWrapper}>
			<Route path='technical-manager' name='technical-manager' component={TechnicalManager} />
			<Route path='pixel-perfectionist' name='pixel-perfectionist' component={PixelPerfectionist} />
		</Route>
		<Route path='/order' name='order' component={Order} />
		<Route path='/outsource' name='outsource' component={Outsource} />
		<Route path='/portfolio' name='portfolio' component={Portfolio} >
			<Route path='/:project' name='project' component={Project} >
				<Route path='/:page' name='page' component={ProjectPage} />
			</Route>
		</Route>
		<Route path='/offert' name='offert' component={Offert} />
		<Route path='/confidential' name='confidential' component={Offert} />
		<Route path='/timeline' name='timeline' component={Timeline} />
	</Route>
);
