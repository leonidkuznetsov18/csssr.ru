import React from 'react';
import FieldPhone from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('FieldPhone')
	.add('default', () => (
		<FieldPhone
			label='Телефон'
			required
		/>
	));
