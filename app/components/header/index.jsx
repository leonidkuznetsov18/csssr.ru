import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import Icon from 'components/icon';
import Menu from 'components/menu';

import styles from './styles.css';

function Header({ open }) {
	return (
		<header className={styles.root}>
			<Link className={styles.logo} to='/'>
				<Icon icon='logo' />
			</Link>
			<Menu open={open} />
		</header>
	);
}

Header.propTypes = {
	open: React.PropTypes.func,
};

export default withStyles(Header, styles);
