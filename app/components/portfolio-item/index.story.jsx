import React from 'react';
import PortfolioItem from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('PortfolioItem')
	.add('default', () => (
		<PortfolioItem
			project={{
				name: 'Проект без ссылки',
				date: '01.01.2015',
			}}
		/>
	))
	.add('with-link', () => (
		<PortfolioItem
			project={{
				name: 'Проект с ссылкой',
				date: '01.01.2015',
				view: 'ideacratia',
			}}
		/>
	))
	.add('with-logo', () => (
		<PortfolioItem
			project={{
				name: 'Проект c логотипом',
				date: '01.01.2015',
				logo: {
					url: 'megafon.png',
					width: 105,
					height: 27,
				},
			}}
		/>
	));
