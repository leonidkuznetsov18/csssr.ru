import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Row(props) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_inner]: props.inner,
	});

	return (
		<div {...props} className={blockClass}>
			{props.children}
		</div>
	);
}

Row.propTypes = {
	children: React.PropTypes.node,
	inner: React.PropTypes.bool,
};

export default withStyles(Row, styles);
