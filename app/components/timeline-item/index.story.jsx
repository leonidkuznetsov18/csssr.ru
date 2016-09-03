import React from 'react';
import TimelineItem from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('TimelineItem')
	.add('text-only', () => (
		<TimelineItem
			data={{
				date: 'Январь 2016',
				event: 'Название события',
				description: 'Описание события',
			}}
		/>
	))
	.add('image-only', () => (
		<TimelineItem
			data={{
				date: '12 апреля 2015',
				event: 'Нам 3&nbsp;года!',
				images: [{
					url: 'content\/csssr-hb-3.png',
					width: 128,
					height: 122,
				}],
			}}
		/>
	))
	.add('image-and-text', () => (
		<TimelineItem
			data={{
				date: '12 апреля 2015',
				event: 'Нам 3&nbsp;года!',
				description: 'Ура-ура!',
				images: [{
					url: 'content\/csssr-hb-3.png',
					width: 128,
					height: 122,
				}],
			}}
		/>
	));
