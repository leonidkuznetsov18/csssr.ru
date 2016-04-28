import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Circloader({ size, color }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_size_big]: size === 'big',
		[styles.root_color_white]: color === 'white',
	});

	return (
		<div className={blockClass} />
	);
}

Circloader.propTypes = {
	color: React.PropTypes.string,
	size: React.PropTypes.string,
};

export default withStyles(Circloader, styles);
