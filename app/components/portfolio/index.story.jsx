import React from 'react';
import Portfolio from './index.jsx';
import storiesOf from 'utils/storiesOf';

const portfolioData = require('data/portfolio.json');
const projects = require('data/projects.json');

storiesOf('Portfolio')
	.add('default', () => (
		<Portfolio data={portfolioData} projects={projects} />
	));
