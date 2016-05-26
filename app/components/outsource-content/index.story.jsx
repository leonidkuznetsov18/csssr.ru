import React from 'react';
import OutsourceContent from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const data = require('data/outsource.json');
const partners = require('data/partners.js').default;

storiesOf('OutsourceContent')
	.add('default', () => (
		<OutsourceContent data={data} partners={partners} />
	));
