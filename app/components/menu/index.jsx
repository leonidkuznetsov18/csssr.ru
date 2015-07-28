import React from 'react';
import { Link } from 'react-router';

import './styles.css';

export default class Menu extends React.Component {
	render() {
		return (
			<nav className='menu'>
				<ul className='menu__list'>
					<li className='menu__item menu__item_fix'/>
					<li className='menu__item'>
						<Link className='menu__link'>
							Компания
						</Link>
					</li>
					<li className='menu__item'>
						<Link className='menu__link'>
							Вакансии
						</Link>
					</li>
					<li className='menu__item'>
						<Link className='menu__link'>
							Вёрстка проекта
						</Link>
					</li>
					<li className='menu__item'>
						<Link className='menu__link'>
							FrontEnd аутсорсинг
						</Link>
					</li>
					<li className='menu__item'>
						<Link className='menu__link'>
							Портфолио
						</Link>
					</li>
					<li className='menu__item'>
						<Link className='menu__link'>
							Контакты
						</Link>
					</li>
					<li className='menu__item menu__item_fix'/>
				</ul>

				<div className='menu__shadow'/>
			</nav>
		);
	}
}
