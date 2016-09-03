import React from 'react';
import TimelineList from './index.jsx';
import storiesOf from 'utils/storiesOf';

const timelineData = require('data/timeline.json');

storiesOf('TimelineList')
	.add('default', () => (
		<TimelineList data={timelineData} />
	));
