import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function TinkoffCheckbox({ children, id, checked, readOnly }) {
	return (
		<div className={styles.root}>
			<input
				checked={checked}
				className={styles.input}
				id={id}
				readOnly={readOnly}
				type='checkbox'
			/>
			<label
				className={styles.label}
				htmlFor={id}
			>
				{children}
			</label>
		</div>
	);
}

TinkoffCheckbox.propTypes = {
	checked: React.PropTypes.bool,
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	id: React.PropTypes.string,
	readOnly: React.PropTypes.bool,
};

export default withStyles(TinkoffCheckbox, styles);
