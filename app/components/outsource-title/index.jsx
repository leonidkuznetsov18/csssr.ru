import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function OutsourceTitle() {
	return (
		<h1 className={styles.root}>
			<span className={styles.left}>
				Frontend
			</span>
			<span className={styles.right}>
				аутсорсинг
			</span>
		</h1>
	);
}

export default withStyles(OutsourceTitle, styles);
