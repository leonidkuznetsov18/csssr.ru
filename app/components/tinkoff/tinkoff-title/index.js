import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function TinkoffTitle({ align, color = 'black', children, size, tag = 'h1' }) {
	const titleClasses = cx({
		[styles.root]: true,
		[styles[`root_align_${align}`]]: align,
		[styles[`root_color_${color}`]]: color,
		[styles[`root_size_${size}`]]: size,
	});

	const Tag = tag;

	return (
		<Tag className={titleClasses}>
			{children}
		</Tag>
	);
}

TinkoffTitle.propTypes = {
	align: React.PropTypes.string,
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
		React.PropTypes.text,
	]),
	color: React.PropTypes.string,
	size: React.PropTypes.string,
	tag: React.PropTypes.string,
};

export default withStyles(TinkoffTitle, styles);
