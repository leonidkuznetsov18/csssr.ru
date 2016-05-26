import React from 'react';
import Link from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Link')
	.add('default', () => (
		<Link>
			Ссылка
		</Link>
	))
	.add('yellow', () => (
		<Link color='yellow'>
			Ссылка
		</Link>
	))
	.add('blue', () => (
		<Link color='blue'>
			Ссылка
		</Link>
	))
	.add('big', () => (
		<Link size='big'>
			Ссылка
		</Link>
	))
	.add('underline', () => (
		<Link underline>
			Ссылка
		</Link>
	))
	.add('dashed', () => (
		<Link color='blue' dashed>
			Ссылка
		</Link>
	))
	.add('active', () => (
		<Link active>
			Ссылка
		</Link>
	));
