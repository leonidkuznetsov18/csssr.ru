import React from 'react';
import Column from './index.jsx';
import storiesOf from 'utils/storiesOf';
import loremIpsum from 'lorem-ipsum';

const text = loremIpsum({
	count: 200,
	units: 'words',
});

storiesOf('Column')
	.add('1/4', () => (
		<Column size={1 / 4}>
			{text}
		</Column>
	))
	.add('1/3', () => (
		<Column size={1 / 3}>
			{text}
		</Column>
	))
	.add('1/2', () => (
		<Column size={1 / 2}>
			{text}
		</Column>
	))
	.add('2/3', () => (
		<Column size={2 / 3}>
			{text}
		</Column>
	))
	.add('2/3 with offset 1/3', () => (
		<Column offset={1 / 3} size={2 / 3}>
			{text}
		</Column>
	));
