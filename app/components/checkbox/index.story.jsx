import React from 'react';
import Checkbox from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Checkbox')
	.add('default', () => (
		<Checkbox id='default'>
			Лейбл
		</Checkbox>
	))
	.add('unchecked', () => (
		<Checkbox checked={false} id='unchecked'>
			Лейбл
		</Checkbox>
	))
	.add('checked', () => (
		<Checkbox checked id='checked'>
			Лейбл
		</Checkbox>
	));
