import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Link as ScrollLink } from 'react-scroll';
import Airship from 'components/airship';
import Link from 'components/link';

import styles from './styles.css';

function OrderAirship() {
	return (
		<div className={styles.root}>
			<Airship image={require('../../images/background/zeppelin_index.svg')}>
				<Link
					color='blue'
					component={ScrollLink}
					duration={500}
					offset={-120}
					size='big'
					smooth
					spy
					to='faq'
				>
					подробности
				</Link>
			</Airship>
		</div>
	);
}

export default withStyles(OrderAirship, styles);
