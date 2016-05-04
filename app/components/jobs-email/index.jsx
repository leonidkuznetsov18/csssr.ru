import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function JobsEmail() {
	return (
		<div className={styles.root}>
			<span className={styles.caption}>
				Служба поиска талантов CSSSR
			</span>
			<a className={styles.link} href='mailto:hr@csssr.io'>
				hr@csssr.io
			</a>
		</div>
	);
}

export default withStyles(JobsEmail, styles);
