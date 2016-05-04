import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Link(props) {
	const Component = props.component;
	const classList = cx({
		[styles.root]: true,
		[styles.root_color_yellow]: props.color === 'yellow',
		[styles.root_color_blue]: props.color === 'blue',
		[styles.root_size_small]: props.size === 'small',
		[styles.root_size_big]: props.size === 'big',
		[styles.root_underline]: props.underline,
		[styles.root_dashed]: props.dashed,
		[styles.root_active]: props.active,
		[props.className]: props.className,
	});

	return (
		<Component {...props} className={classList}>
			{props.children}
		</Component>
	);
}

Link.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.element,
		React.PropTypes.array,
	]).isRequired,
	className: React.PropTypes.string,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
	]),
	color: React.PropTypes.oneOf(['blue', 'yellow']),
	size: React.PropTypes.oneOf(['big', 'small']),
	underline: React.PropTypes.bool,
	dashed: React.PropTypes.bool,
	active: React.PropTypes.bool,
};

Link.defaultProps = {
	color: 'blue',
	dashed: false,
	active: false,
	component: 'a',
};

export default withStyles(Link, styles);
