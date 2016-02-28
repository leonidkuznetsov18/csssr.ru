import React, { PropTypes } from 'react';
import MenuItem from 'components/menu-item';

import './styles.css';

const menu = [
	{
		text: 'Компания',
		href: '/company',
	},
	{
		text: 'Вакансии',
		href: '/jobs',
	},
	{
		text: 'Вёрстка проекта',
		href: '/order',
	},
	{
		text: 'FrontEnd аутсорсинг',
		href: '/outsource',
	},
	{
		text: 'Портфолио',
		href: '/portfolio',
	},
];

export default function Menu({ open, active }) {
	return (
		<nav className='menu'>
			<ul className='menu__list'>
				<li className='menu__item menu__item_fix'/>
				{menu.map((item) => (
					<li className='menu__item' key={item.href}>
						<MenuItem href={item.href}>
							{item.text}
						</MenuItem>
					</li>
				))}
				<li className='menu__item' onClick={open}>
					<MenuItem component='a' active={active}>
						Контакты
					</MenuItem>
				</li>
				<li className='menu__item menu__item_fix'/>
			</ul>
			<div className='menu__shadow'/>
		</nav>
	);
}

Menu.propTypes = {
	open: PropTypes.func,
	active: PropTypes.bool,
};
