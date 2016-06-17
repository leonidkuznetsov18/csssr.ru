import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Circloader from 'components/circloader';
import styles from './styles.css';

function VacancyLoader() {
	return (
		<div className={styles.root}>
			<Circloader />
		</div>
	);
}

export default withStyles(VacancyLoader, styles);
