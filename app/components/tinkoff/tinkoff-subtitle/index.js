import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function TinkoffSubtitle({ align, color = 'gray', children, tag = 'p' }) {
	const subtitleClasses = cx({
		[styles.root]: true,
		[styles[`root_align_${align}`]]: align,
		[styles[`root_color_${color}`]]: color,
	});

	const Tag = tag;

	return (
		<Tag className={subtitleClasses}>
			{children}
		</Tag>
	);
}

TinkoffSubtitle.propTypes = {
	align: React.PropTypes.string,
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
		React.PropTypes.text,
	]),
	color: React.PropTypes.string,
	tag: React.PropTypes.string,
};

export default withStyles(TinkoffSubtitle, styles);
