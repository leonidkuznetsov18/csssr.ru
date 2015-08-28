import React from 'react';
import OrderShort from 'components/order-short';
import OrderContent from 'components/order-content';
import Faq from 'components/order-faq'

import './styles.css';

export default class Order extends React.Component {

	componentDidMount() {
		document.title = "Вёрстка проекта в CSSSR";
	}


	render() {
		return (
			<div className='order'>
				<div className='order__main'>
					<div className='order__main-bg' />
					<OrderShort />
					<OrderContent />
				</div>
				<Faq />
			</div>
		);
	}
}
