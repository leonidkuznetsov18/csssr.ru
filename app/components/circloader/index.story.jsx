import React from 'react';
import Circloader from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Circloader')
	.add('default', () => (
		<Circloader />
	))
	.add('size-big', () => (
		<Circloader size='big' />
	))
	.add('color-white', () => (
		<Circloader color='white' />
	))
	.add('size-big, color-white', () => (
		<Circloader color='white' size='big' />
	));
