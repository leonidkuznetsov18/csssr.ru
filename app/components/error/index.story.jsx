import React from 'react';
import Error from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Error')
	.add('403', () => (
		<Error number={403} />
	))
	.add('404', () => (
		<Error number={404} />
	))
	.add('500', () => (
		<Error number={500} />
	));
