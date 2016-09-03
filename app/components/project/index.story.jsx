import React from 'react';
import Project from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { linkTo } from '@kadira/storybook';

import ProjectFrame from 'components/project-frame';

const projects = require('data/projects.json');

storiesOf('Project')
	.add('loading', () => (
		<Project
			onToggle={linkTo('Project', 'collapsed')}
			project={projects[0]}
		>
			<ProjectFrame
				onLoad={linkTo('Project', 'loaded')}
				url='http://p800.csssr.ru/p800.html'
			/>
		</Project>
	))
	.add('loaded', () => (
		<Project
			onToggle={linkTo('Project', 'collapsed-loaded')}
			project={projects[0]}
		>
			<ProjectFrame
				loaded
				url='http://p800.csssr.ru/p800.html'
			/>
		</Project>
	))
	.add('collapsed', () => (
		<Project
			collapsed
			onToggle={linkTo('Project', 'loading')}
			project={projects[0]}
		>
			<ProjectFrame
				url='http://p800.csssr.ru/p800.html'
			/>
		</Project>
	))
	.add('collapsed-loaded', () => (
		<Project
			collapsed
			onToggle={linkTo('Project', 'loaded')}
			project={projects[0]}
		>
			<ProjectFrame
				loaded
				url='http://p800.csssr.ru/p800.html'
			/>
		</Project>
	));
