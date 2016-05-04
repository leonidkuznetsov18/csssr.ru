import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Parallax from 'components/parallax';

import styles from './styles.css';

function PortfolioBanner() {
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

export default withStyles(PortfolioBanner, styles);
