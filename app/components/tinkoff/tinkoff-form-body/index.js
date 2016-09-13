import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function TinkoffFormBody({ children, ...rest }) {
	return (
		<form className={styles.root} {...rest} >
			{children}
		</form>
	);
}

TinkoffFormBody.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};

export default withStyles(TinkoffFormBody, styles);
