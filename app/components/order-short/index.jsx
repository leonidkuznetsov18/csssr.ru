import React from 'react';

import './styles.css';

export default class OrderShort extends React.Component {
	render() {
		return (
			<div className='order__main__short'>
				<div id='posAirship' className='order__main__short-block'>
					<div className='order__main__short__airship' />
					<div className='order__main__short__text-block' />
					<a
						href='#faq'
						className='order__main__short__more blue-link big-blue-link'
					>подробности</a>
				</div>
			</div>
		);
	}
}
