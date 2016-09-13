import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function TinkoffLegend({ children }) {
	return (
		<legend className={styles.root}>
			{children}
		</legend>
	);
}

TinkoffLegend.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
		React.PropTypes.text,
	]),
};

export default withStyles(TinkoffLegend, styles);
