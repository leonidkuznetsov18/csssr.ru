import React from 'react';
import Button from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Button')
	.add('default', () => (
		<Button>
			Кнопка обычная
		</Button>
	))
	.add('form', () => (
		<Button mod='form'>
			Кнопка на форме
		</Button>
	))
	.add('social', () => (
		<Button mod='form'>
			Кнопка соц кнопок
		</Button>
	));
