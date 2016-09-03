import React from 'react';
import Field from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Field')
	.add('default', () => (
		<Field
			label='Лейбл'
			maxLength='100'
		/>
	))
	.add('required', () => (
		<Field
			label='Лейбл'
			maxLength='100'
			required
		/>
	))
	.add('invalid', () => (
		<Field
			invalid
			label='Лейбл'
			maxLength='100'
		/>
	));
