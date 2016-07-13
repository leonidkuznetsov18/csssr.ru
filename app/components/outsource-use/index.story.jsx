import React from 'react';
import OusourceUse from './index.jsx';
import storiesOf from 'utils/storiesOf';

const data = require('data/outsource.json');

storiesOf('OusourceUse')
	.add('default', () => (
		<OusourceUse tips={data.tips} />
	));
