import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Link(props) {
	const classList = cx('link', props.className, {
		link_color_yellow: props.color === 'yellow',
		link_color_blue: props.color === 'blue',
		link_size_small: props.size === 'small',
		link_size_big: props.size === 'big',
		link_underline: props.underline,
		link_dashed: props.dashed,
		link_active: props.active,
	});
	const Component = props.component;
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
