import React from 'react';
import cx from 'classnames';

import { Link } from 'react-router';

import './styles.css';

export default function MenuItem({ href, children, active, component }) {
	const Component = component;
	const blockClass = cx({
		'menu-item': true,
		'menu-item_state_active': active,
	});

	return (
		<Component
			className={blockClass}
			activeClassName='menu-item_state_active'
			to={href}
		>
			{children}
			<span className='menu-item__arrow'/>
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
