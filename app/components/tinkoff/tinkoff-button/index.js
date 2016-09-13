import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function TinkoffButton({ children, external, tag = 'button', href, type, size }) {
	const buttonClasses = cx({
		[styles.root]: true,
		[styles[`root_size_${size}`]]: size,
	});

	const Tag = tag;

	return (
		<Tag
			className={buttonClasses}
			href={href}
			target={external ? '_blank' : null}
			type={type}
		>
			{children}
		</Tag>
	);
}

TinkoffButton.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
		React.PropTypes.text,
	]),
	external: React.PropTypes.bool,
	href: React.PropTypes.string,
	size: React.PropTypes.string,
	tag: React.PropTypes.string,
	type: React.PropTypes.string,
};

export default withStyles(TinkoffButton, styles);
