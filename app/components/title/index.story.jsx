import React from 'react';
import Title from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Title')
	.add('default', () => (
		<Title>
			Заголовок
		</Title>
	))
	.add('size-medium', () => (
		<Title size='medium'>
			Заголовок Средний
		</Title>
	))
	.add('size-small', () => (
		<Title size='small'>
			Заголовок Маленький
		</Title>
	))
	.add('color-yellow', () => (
		<Title color='yellow'>
			Заголовок Желтый
		</Title>
	))
	.add('color-black', () => (
		<Title color='black'>
			Заголовок Черный
		</Title>
	));
