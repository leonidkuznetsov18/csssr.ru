import React from 'react';

import styles from './styles.css';

export default function Hole() {
	return (
		<div className={styles.root}>
			<div className={styles.side + ' ' + styles.side_left} />
			<div className={styles.side + ' ' + styles.side_right} />
		</div>
	);
}
