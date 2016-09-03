import React from 'react';
import Breadcrumbs from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Breadcrumbs')
	.add('1 item', () => (
		<Breadcrumbs
			items={[
				{
					name: 'Item',
				},
			]}
		/>
	))
	.add('2 items', () => (
		<Breadcrumbs
			items={[
				{
					link: '/',
					name: 'Item',
				},
				{
					name: 'Item2',
				},
			]}
		/>
	))
	.add('3 items', () => (
		<Breadcrumbs
			items={[
				{
					link: '/',
					name: 'Item',
				},
				{
					link: '/',
					name: 'Item2',
				},
				{
					name: 'Item3',
				},
			]}
		/>
	));
