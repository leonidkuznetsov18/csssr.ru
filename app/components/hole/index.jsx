import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function Hole() {
	return (
		<div className={styles.root}>
			<div className={styles.side + ' ' + styles.side_left} />
			<div className={styles.side + ' ' + styles.side_right} />
		</div>
	);
}

export default withStyles(Hole, styles);
