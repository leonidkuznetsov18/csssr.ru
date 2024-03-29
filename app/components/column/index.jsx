import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Column({ size, smallSize, offset, children }) {
	const classList = cx({
		[styles.root]: true,
		[styles.root_size_oneThird]: size === 1 / 3,
		[styles.root_size_oneFourth]: size === 1 / 4,
		[styles.root_size_twoThird]: size === 2 / 3,
		[styles.root_size_half]: size === 1 / 2,
		[styles.root_small_hidden]: smallSize === 0,
		[styles.root_small_full]: smallSize === 1,
		[styles.root_offset_oneThird]: offset === 1 / 3,
	});

	return (
		<div className={classList}>
			{children}
		</div>
	);
}

Column.propTypes = {
	children: React.PropTypes.node,
	offset: React.PropTypes.number,
	size: React.PropTypes.number,
	smallSize: React.PropTypes.number,
};

Column.defaultProps = {
	size: 1 / 3,
	offset: 0,
};

export default withStyles(Column, styles);
