import React from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function Row(props) {
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
