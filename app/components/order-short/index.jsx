import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

import './styles.css';

export default class OrderShort extends React.Component {
	render() {
		return (
			<div className='order__main__short'>
				<div id='posAirship' className='order__main__short-block'>
					<div className='order__main__short__airship' />
					<div className='order__main__short__text-block' />
					<ScrollLink
						to='faq'
						spy={true}
						smooth={true}
						offset={-120}
						duration={500}
						className='order__main__short__more blue-link big-blue-link'
						data-scroll
					>подробности</ScrollLink>
				</div>
			</div>
		);
	}
}
