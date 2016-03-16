import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import Airship from 'components/airship';
import Link from 'components/link';

import styles from './styles.css';

export default function OrderAirship() {
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
