import React from 'react';
import cx from 'classnames';

import { Link } from 'react-router';

import styles from './styles.css';

export default function MenuItem({ href, children, active, component }) {
	const Component = component;
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_state_active]: active,
	});

	return (
		<Component
			className={blockClass}
			activeClassName={styles.menuItem_state_active}
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
