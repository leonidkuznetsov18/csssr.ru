import React, { PropTypes } from 'react';
import cx from 'classnames';

import './styles.css';

export default function Tooltip({ children, className, text }) {
	return (
		<div className={cx('tooltip-wrapper', className)}>
			<span className='tooltip' tabIndex='-1'>{children}</span>
			<div className='tooltip__full' tabIndex='-1'>
				{text}
			</div>
			<div className='tooltip__mask' />
		</div>
	);
}

Tooltip.propTypes = {
	text: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array,
	]),
	className: PropTypes.string,
};

Tooltip.defaultProps = {
	children: '?',
};
