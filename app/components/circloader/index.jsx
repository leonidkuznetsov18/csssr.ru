import React from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function Circloader({ size, color }) {
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
	size: React.PropTypes.string,
	color: React.PropTypes.string,
};
