import React from 'react';
import OrderShort from 'components/order-short';

import './styles.css';

export default class Order extends React.Component {
	render() {
		return (
			<div className='order'>
				<div className='order__main'>
					<div className='order__main-bg' />
					<OrderShort />
					<div className='order__main__content'></div>
				</div>
			</div>
		);
	}
}
