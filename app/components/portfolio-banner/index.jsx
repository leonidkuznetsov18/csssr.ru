import React from 'react';

import Parallax from 'components/parallax';

import styles from './styles.css';

export default function PortfolioBanner() {
	return (
		<div className={styles.root}>
			<Parallax speed={0.3}>
				<div className={styles.slogan} />
			</Parallax>
			<Parallax speed={0.2}>
				<div className={styles.rocket} />
			</Parallax>
		</div>
	);
}
