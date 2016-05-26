import React from 'react';
import FieldPhone from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('FieldPhone')
	.add('default', () => (
		<FieldPhone
			label='Телефон'
			required
		/>
	));
