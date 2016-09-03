import React from 'react';
import Content from './index.jsx';
import storiesOf from 'utils/storiesOf';
import loremIpsum from 'lorem-ipsum';

const text = loremIpsum({
	count: 200,
	units: 'words',
});

storiesOf('Content')
	.add('default', () => (
		<Content>
			{text}
		</Content>
	))
	.add('without padding', () => (
		<Content padding={false}>
			{text}
		</Content>
	))
	.add('with hole', () => (
		<Content hole>
			{text}
		</Content>
	));
