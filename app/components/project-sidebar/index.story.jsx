import React from 'react';
import ProjectSidebar from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import { action } from '@kadira/storybook';

const projects = require('data/projects.json');

storiesOf('ProjectSidebar')
	.add('default', () => (
		<ProjectSidebar
			onToggle={action('toggle')}
			project={projects[0]}
		/>
	));
