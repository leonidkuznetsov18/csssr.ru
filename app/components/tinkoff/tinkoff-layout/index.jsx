import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function TinkoffLayout({ children }) {
	return (
		<div className={styles.root}>
			{children}
		</div>
	);
}

TinkoffLayout.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
		React.PropTypes.text,
	]),
};

export default withStyles(TinkoffLayout, styles);
