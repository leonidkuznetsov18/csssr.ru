import React , {PropTypes} from 'react';
import MenuItem from 'components/menu-item';
import cx from 'classnames';

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
	}
];
const renderMenuItem = item => (
			<li className='menu__item' key={item.href}>
				<MenuItem {...item} />
			</li>
		);

export default class Menu extends React.Component {
	static propTypes = {
		open: PropTypes.func,
		active: PropTypes.bool
	}

	render() {
		const contactClass = cx ({
			'menu-item': true,
			'menu-item_state_active': this.props.active
		});
		return (
			<nav className='menu'>
				<ul className='menu__list'>
					<li className='menu__item menu__item_fix'/>
					{menu.map(renderMenuItem)}
					<li className='menu__item' onClick={this.props.open}>
						<a className={contactClass}>
							Контакты
							<span className='menu-item__arrow'/>
						</a>
					</li>
					<li className='menu__item menu__item_fix'/>
				</ul>
				<div className='menu__shadow'/>
			</nav>
		);
	}
}
