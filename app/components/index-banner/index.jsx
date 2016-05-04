import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function IndexBanner() {
	return (
		<h1 className={styles.root}>
			Вёрстка и JavaScript — гибкая фронтенд разработка
		</h1>
	);
}

export default withStyles(IndexBanner, styles);
