import React from 'react';
import Icon from 'components/icon';
import Text from 'components/text';
import Widget from 'components/widget';

import styles from './styles.css';

export default function JobsWidget() {
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
