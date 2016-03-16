import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function Tooltip({ children, className, text }) {
	const blockClass = cx({
		[styles.root]: true,
		[className]: className,
	});

	return (
		<div className={blockClass}>
			<span className={styles.content} tabIndex='-1'>
				{children}
			</span>
			<div className={styles.full} tabIndex='-1'>
				{text}
			</div>
			<div className={styles.mask} />
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
