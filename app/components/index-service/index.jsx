import React from 'react';
import Parallax from 'components/parallax';
import Icon from 'components/icon';
import Service from 'components/service';

import styles from './styles.css';

export default function IndexService({ data }) {
	return (
		<div className={styles.root}>
			<Parallax speed={0.3}>
				<span className={styles.rocket}>
					<Icon icon='rocket' />
				</span>
			</Parallax>
			<div className={styles.services}>
				{data.map((service, item) => (
					<div className={styles.service} key={item}>
						<Service service={service} />
					</div>
				))}
				<span className={styles.satellite}>
					<Icon icon='satellite' />
				</span>
			</div>
		</div>
	);
}

IndexService.propTypes = {
	data: React.PropTypes.array.isRequired,
};
