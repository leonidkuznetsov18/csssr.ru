import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function FormValidationWindow({ title, text, children }) {
	return (
		<div className={styles.root}>
			<div className={styles.attention}>
				{title}
			</div>
			{(children || text) &&
				<div className={styles.text}>
					{children || text}
				</div>
			}
		</div>
	);
}

FormValidationWindow.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	text: React.PropTypes.any,
	title: React.PropTypes.string,
};

FormValidationWindow.defaultProps = {
	title: 'секундочку!',
	text: '',
};

export default withStyles(FormValidationWindow, styles);
