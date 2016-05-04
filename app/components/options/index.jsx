import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Options(props) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_inline]: props.inline,
		[props.className]: props.className,
	});

	return (
		<ul {...props} className={blockClass}>
			{props.children.map((child, index) => (
				<li className={styles.item} key={index}>
					{child}
				</li>
			))}
		</ul>
	);
}

Options.propTypes = {
	className: React.PropTypes.string,
	children: React.PropTypes.node,
	inline: React.PropTypes.bool,
};

Options.defaultProps = {
	inline: false,
};

export default withStyles(Options, styles);
