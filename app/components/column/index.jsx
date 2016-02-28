import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Column({ size, smallSize, offset, children }) {
	const classList = cx({
		column: true,
		'column_size_one-third': size === 1 / 3,
		'column_size_one-fourth': size === 1 / 4,
		'column_size_two-third': size === 2 / 3,
		column_size_half: size === 1 / 2,
		column_small_hidden: smallSize === 0,
		column_small_full: smallSize === 1,
		'column_offset_one-third': offset === 1 / 3,
	});

	return (
		<div className={classList}>
			{children}
		</div>
	);
}

Column.propTypes = {
	children: React.PropTypes.node,
	size: React.PropTypes.number,
	smallSize: React.PropTypes.number,
	offset: React.PropTypes.number,
};

Column.defaultProps = {
	size: 1 / 3,
	offset: 0,
};
