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
			className={blockClass}
			activeClassName={styles.root_state_active}
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
	href: React.PropTypes.string,
	active: React.PropTypes.bool,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
	]),
	children: React.PropTypes.string,
};

export default withStyles(MenuItem, styles);
