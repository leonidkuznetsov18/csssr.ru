import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Tooltip({ children, className, text }) {
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
	children: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.element,
		React.PropTypes.array,
	]),
	className: React.PropTypes.string,
	text: React.PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
	children: '?',
};

export default withStyles(Tooltip, styles);
