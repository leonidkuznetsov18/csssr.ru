import React from 'react';

import styles from './styles.css';

export default function JobBanner() {
	return (
		<img
			className={styles.root}
			src={require('images/background/work.svg')}
		/>
	);
}
