import React from 'react';
import OutsourceExamples from './index.jsx';
import storiesOf from 'utils/storiesOf';

const data = require('data/outsource.json');

storiesOf('OutsourceExamples')
	.add('default', () => (
		<OutsourceExamples tips={data.tips} />
	));
