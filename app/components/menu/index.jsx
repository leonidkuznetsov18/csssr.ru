import React, { PropTypes } from 'react';
import MenuItem from 'components/menu-item';

import styles from './styles.css';

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

export default function Menu({ open }) {
	return (
		<nav className={styles.root}>
			<ul className={styles.list}>
				<li className={styles.item}/>
				{menu.map((item) => (
					<li className={styles.item} key={item.href}>
						<MenuItem href={item.href}>
							{item.text}
						</MenuItem>
					</li>
				))}
				<li className={styles.item} onClick={open}>
					<MenuItem component='a'>
						Контакты
					</MenuItem>
				</li>
				<li className={styles.item} />
			</ul>
			<div className={styles.shadow} />
		</nav>
	);
}

Menu.propTypes = {
	open: PropTypes.func,
};
