import React from 'react';
import Widget from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Widget')
	.add('fb', () => (
		<Widget type='fb' />
	))
	.add('vk', () => (
		<Widget type='vk' />
	))
	.add('tw', () => (
		<Widget type='tw' />
	))
	.add('likebox', () => (
		<Widget type='likebox' />
	));
