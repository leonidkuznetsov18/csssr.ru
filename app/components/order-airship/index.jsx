import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Link as ScrollLink } from 'react-scroll';
import Airship from 'components/airship';
import Link from 'components/link';

import styles from './styles.css';

function OrderAirship() {
	return (
		<div className={styles.root}>
			<Airship image='zeppelin_order.svg'>
				<Link
					to='faq'
					spy={true}
					smooth={true}
					offset={-120}
					duration={500}
					size='big'
					color='blue'
					component={ScrollLink}
				>
					подробности
				</Link>
			</Airship>
		</div>
	);
}

export default withStyles(OrderAirship, styles);
