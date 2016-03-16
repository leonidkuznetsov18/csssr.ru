import React from 'react';

import styles from './styles.css';

export default function JobsEmail() {
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
