import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Title({ size, children, component, color, center, indent }) {
	const classList = cx({
		title: true,
		title_noindent: indent === false,
		title_center: center === true,
		title_size_medium: size === 'medium',
		title_size_small: size === 'small',
		title_color_yellow: color === 'yellow',
		title_color_black: color === 'black',
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
