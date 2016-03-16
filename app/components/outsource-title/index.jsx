import React from 'react';

import styles from './styles.css';

export default function OutsourceTitle() {
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
