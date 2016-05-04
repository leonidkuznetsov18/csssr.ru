import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from 'components/icon';
import Text from 'components/text';
import Widget from 'components/widget';

import styles from './styles.css';

function JobsWidget() {
	return (
		<div className={styles.root}>
			<div className={styles.layout}>
				<Widget type='vk' />
			</div>

			<div className={styles.hint}>
				<span className={styles.arrow}>
					<Icon icon='curve-arrow' />
				</span>

				<Text size='xs'>
					Следите за новыми вакансиями
				</Text>
			</div>
		</div>
	);
}

export default withStyles(JobsWidget, styles);
