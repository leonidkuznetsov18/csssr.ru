import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Icon from 'components/icon';

import styles from './styles.css';

function Button(props) {
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
					<span className={styles.icon}>
						<Icon icon={props.icon} />
					</span>
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

export default withStyles(Button, styles);
