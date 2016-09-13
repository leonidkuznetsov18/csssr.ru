import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';

import styles from './styles.css';

function TinkoffHeader() {
	return (
		<header className={styles.root}>
			<div className={styles.logo}>
				<Icon icon='tinkoff/logo' />
			</div>
		</header>
	);
}

export default withStyles(TinkoffHeader, styles);
