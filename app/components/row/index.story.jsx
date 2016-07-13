import React from 'react';
import Row from './index.jsx';
import storiesOf from 'utils/storiesOf';
import loremIpsum from 'lorem-ipsum';

const text = loremIpsum({
	count: 200,
	units: 'words',
});

storiesOf('Row')
	.add('default', () => (
		<Row>
			{text}
		</Row>
	))
	.add('inner', () => (
		<Row inner>
			{text}
		</Row>
	));
