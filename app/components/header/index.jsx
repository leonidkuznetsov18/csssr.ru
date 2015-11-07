import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';
import Menu from 'components/menu';
import Language from 'components/language';
import './styles.css';

export default class Header extends React.Component {
	static propTypes = {
		open: PropTypes.func,
		active: PropTypes.bool
	}
	render() {
		return (
			<header className='header'>
				<Link to='/' className='header__logo'>
					<Icon icon='logo'/>
				</Link>
				<Menu open={this.props.open} active={this.props.active}/>
				<Language/>
			</header>
		);
	}
}
