import React from 'react';
import Radio from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Radio')
	.add('default', () => (
		<Radio id='default'>
			Лейбл
		</Radio>
	))
	.add('unchecked', () => (
		<Radio checked={false} id='unchecked'>
			Лейбл
		</Radio>
	))
	.add('checked', () => (
		<Radio checked id='checked'>
			Лейбл
		</Radio>
	));
