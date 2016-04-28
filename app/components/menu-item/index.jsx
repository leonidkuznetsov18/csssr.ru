import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import { Link } from 'react-router';

import styles from './styles.css';

function MenuItem({ href, children, active, component }) {
	const Component = component;
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_state_active]: active,
	});

	return (
		<Component
			activeClassName={styles.root_state_active}
			className={blockClass}
			to={href}
		>
			{children}
			<span className={styles.arrow} />
		</Component>
	);
}

MenuItem.defaultProps = {
	component: Link,
};

MenuItem.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.string,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
	]),
	href: React.PropTypes.string,
};

export default withStyles(MenuItem, styles);
