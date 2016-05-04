import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function JobBanner() {
	return (
		<img
			className={styles.root}
			src={require('images/background/work.svg')}
		/>
	);
}

export default withStyles(JobBanner, styles);
