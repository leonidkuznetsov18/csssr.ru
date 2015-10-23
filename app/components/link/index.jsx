import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

export default function Link (props) {
	const classList = cx('link', props.className, {
		link_color_yellow: props.color === 'yellow',
		link_color_blue: props.color === 'blue',
		link_size_small: props.size === 'small',
		link_size_big: props.size === 'big',
		link_underline: props.underline,
		link_dashed: props.dashed,
		link_active: props.active
	});

	return (
		<a {...props} className={classList}>
			{props.children}
		</a>
	);
}

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array,
	]).isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf(['blue', 'yellow']),
	size: PropTypes.oneOf(['big', 'small']),
	underline: PropTypes.bool,
	dashed: PropTypes.bool,
	active: PropTypes.bool
};

Link.defaultProps = {
	color: 'blue',
	dashed: false,
	active: false
};
