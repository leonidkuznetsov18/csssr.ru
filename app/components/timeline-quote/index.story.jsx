import React from 'react';
import TimelineQuote from './index.jsx';
import storiesOf from 'utils/storiesOf';
import loremIpsum from 'lorem-ipsum';

const text = loremIpsum({
	count: 200,
	units: 'words',
});

storiesOf('TimelineQuote')
	.add('default', () => (
		<TimelineQuote
			text={text}
			title='История связанная с CSSSR'
		/>
	));
