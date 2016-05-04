import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function JobsBanner() {
	return (
		<div className={styles.root} />
	);
}

export default withStyles(JobsBanner, styles);
