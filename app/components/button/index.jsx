import React from 'react';
import cx from 'classnames';

import Icon from 'components/icon';

import styles from './styles.css';

export default function Button(props) {
	const Component = props.component;
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_type_form]: props.mod === 'form',
		[styles.root_type_social]: props.mod === 'social',
	});

	return (
		<Component {...props} className={blockClass}>
			<span className={styles.inner}>
				{props.icon &&
					<Icon className={styles.icon} icon={props.icon} />
				}
				{props.children}
			</span>
			<span className={styles.shadow} />
		</Component>
	);
}

Button.propTypes = {
	children: React.PropTypes.node,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
	]),
	mod: React.PropTypes.string,
	icon: React.PropTypes.string,
};

Button.defaultProps = {
	component: 'button',
};
