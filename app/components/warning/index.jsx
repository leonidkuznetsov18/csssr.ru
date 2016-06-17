import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.css';

function Warning({ children }) {
	return (
		<div className={styles.root}>
			{children}
		</div>
	);
}

Warning.propTypes = {
	children: PropTypes.node,
};

export default withStyles(Warning, styles);
