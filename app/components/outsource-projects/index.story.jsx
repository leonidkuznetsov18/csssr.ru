import React from 'react';
import OutsourceProjects from './index.jsx';
import storiesOf from 'utils/storiesOf';

const partners = require('data/partners.js').default;

storiesOf('OutsourceProjects')
	.add('default', () => (
		<OutsourceProjects partners={partners} />
	));
