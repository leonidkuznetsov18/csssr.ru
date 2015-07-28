import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';
import Menu from 'components/menu';
import Language from 'components/language';
import './styles.css';

export default class Header extends React.Component {
	render() {
		return (
			<header className='header'>
				<Link to='/' className='header__logo'>
					<Icon icon='logo'/>
				</Link>

				<Menu/>

				<Language/>
			</header>
		);
	}
}
