import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Row(props) {
	const blockClass = cx({
		row: true,
		row_inner: props.inner,
	});

	return (
		<div {...props} className={blockClass}>
			{props.children}
		</div>
	);
}

Row.propTypes = {
	children: React.PropTypes.node,
	index: React.PropTypes.bool,
};
