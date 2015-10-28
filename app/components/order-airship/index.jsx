import React from 'react';

import {Link as ScrollLink} from 'react-scroll';
import Airship from 'components/airship';
import Link from 'components/link';

import './styles.css';

export default function OrderAirship() {
	return (
		<div className='order-airship'>
			<Airship image='zeppelin_order.svg'>
				<ScrollLink
					to='faq'
					spy={true}
					smooth={true}
					offset={-120}
					duration={500}
				>
					<Link size='big' color='blue'>
						подробности
					</Link>
				</ScrollLink>
			</Airship>
		</div>
	);
}
