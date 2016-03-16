import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';
import Menu from 'components/menu';
import Language from 'components/language';

import styles from './styles.css';

export default function Header({ open, active }) {
	return (
		<header className={styles.root}>
			<Link to='/' className={styles.logo}>
				<Icon icon='logo'/>
			</Link>
			<Menu open={open} active={active}/>
			{ /*<Language/>*/}
		</header>
	);
}

Header.propTypes = {
	open: PropTypes.func,
	active: PropTypes.bool,
};
