import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Title({ size, children, component, color, center, indent }) {
	const classList = cx({
		[styles.root]: true,
		[styles.root_noindent]: indent === false,
		[styles.root_center]: center === true,
		[styles.root_size_medium]: size === 'medium',
		[styles.root_size_small]: size === 'small',
		[styles.root_color_yellow]: color === 'yellow',
		[styles.root_color_black]: color === 'black',
	});
	const Tag = component;

	if (typeof children === 'string') {
		return (
			<Tag
				className={classList}
				dangerouslySetInnerHTML={{ __html: children }}
			/>
		);
	}

	return (
		<Tag className={classList}>
			{children}
		</Tag>
	);
}

Title.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	indent: React.PropTypes.bool,
	size: React.PropTypes.string,
	color: React.PropTypes.string,
	center: React.PropTypes.bool,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.element,
	]),
};

Title.defaultProps = {
	component: 'h1',
	indent: true,
};

export default withStyles(Title, styles);
