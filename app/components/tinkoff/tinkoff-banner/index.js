import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';
import TinkoffTitle from 'components/tinkoff/tinkoff-title';

import styles from './styles.css';

function TinkoffBanner() {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div className={styles.texts}>
					<p className={styles.description}>
						Открыта вакансия
					</p>
					<TinkoffTitle color='white' size='s'>
						Разработчика JavaScript
					</TinkoffTitle>
				</div>
				<div className={styles.js}>
					<Icon icon='tinkoff/js' />
				</div>
			</div>
		</div>
	);
}

export default withStyles(TinkoffBanner, styles);
