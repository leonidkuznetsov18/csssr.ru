import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Text({ size, children, indent, color, center, weight }) {
	const classList = cx({
		[styles.root]: true,
		[styles.root_size_l]: size === 'l',
		[styles.root_size_m]: size === 'm',
		[styles.root_size_s]: size === 's',
		[styles.root_size_xs]: size === 'xs',
		[styles.root_size_xxs]: size === 'xxs',
		[styles.root_noindent]: indent === false,
		[styles.root_center]: center,
		[styles.root_color_blue]: color === 'blue',
		[styles.root_color_grey]: color === 'grey',
		[styles.root_color_white]: color === 'white',
		[styles.root_weight_normal]: weight === 'normal',
	});

	if (typeof children === 'string') {
		return (
			<p
				className={classList}
				dangerouslySetInnerHTML={{ __html: children }}
			/>
		);
	}

	return (
		<p className={classList}>
			{children}
		</p>
	);
}

Text.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.element,
		React.PropTypes.array,
	]),
	size: React.PropTypes.string,
	color: React.PropTypes.string,
	weight: React.PropTypes.string,
	indent: React.PropTypes.bool,
	center: React.PropTypes.bool,
};

Text.defaultProps = {
	indent: true,
};

export default withStyles(Text, styles);
