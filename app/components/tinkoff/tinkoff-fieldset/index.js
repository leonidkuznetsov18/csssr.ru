import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function TinkoffFieldset({ children }) {
	return (
		<fieldset className={styles.root}>
			{children}
		</fieldset>
	);
}

TinkoffFieldset.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};

export default withStyles(TinkoffFieldset, styles);
