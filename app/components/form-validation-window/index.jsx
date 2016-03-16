import React, { PropTypes } from 'react';

import styles from './styles.css';

export default function FormValidationWindow({ title, text, children }) {
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
	title: PropTypes.string,
	text: PropTypes.string,
};

FormValidationWindow.defaultProps = {
	title: 'секундочку!',
	text: '',
};
