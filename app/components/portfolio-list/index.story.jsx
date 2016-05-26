import React from 'react';
import PortfolioList from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const projects = require('data/projects.json');

storiesOf('PortfolioList')
	.add('default', () => (
		<PortfolioList data={projects} />
	));
