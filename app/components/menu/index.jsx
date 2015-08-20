import React from 'react';
import MenuItem from 'components/menu-item';

import './styles.css';

const menu = [
	{
		text: 'Компания',
		href: '/company'
	},
	{
		text: 'Вакансии',
		href: '/jobs'
	},
	{
		text: 'Вёрстка проекта',
		href: '/order'
	},
	{
		text: 'FrontEnd аутсорсинг',
		href: '/outsource'
	},
	{
		text: 'Портфолио',
		href: '/portfolio'
	},
	{
		text: 'Контакты',
		href: '/offert'
	}
];

export default class Menu extends React.Component {
	render() {
		return (
			<nav className='menu'>
				<ul className='menu__list'>
					<li className='menu__item menu__item_fix'/>
					{menu.map(item => (
						<li className='menu__item' key={item.href}>
							<MenuItem {...item} />
						</li>
					))}
					<li className='menu__item menu__item_fix'/>
				</ul>

				<div className='menu__shadow'/>
			</nav>
		);
	}
}
