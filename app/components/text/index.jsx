import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Text({size, children, indent, color}) {
	const classList = cx({
		text: true,
		text_size_m: size === 'm',
		text_size_s: size === 's',
		text_size_xs: size === 'xs',
		text_size_xxs: size === 'xxs',
		text_noindent: indent === false,
		text_color_blue: color === 'blue'
	});

	if (typeof children === 'string') {
		return (
			<p
				className={classList}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	} else {
		return (
			<p className={classList}>
				{children}
			</p>
		);
	}
};

Text.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.element,
		React.PropTypes.array,
	]),
	size: React.PropTypes.string,
	color: React.PropTypes.string,
	weight: React.PropTypes.string,
	indent: React.PropTypes.bool
};

Text.defaultProps = {
	indent: true
};
