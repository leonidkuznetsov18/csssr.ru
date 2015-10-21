import React from 'react';
import OrderShort from 'components/order-short';
import OrderContent from 'components/order-content';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';

import './styles.css';

const faq = require('data/faq-order.json');

export default class Order extends React.Component {
	componentDidMount() {
		document.title = 'Вёрстка проекта в CSSSR';
	}

	render() {
		return (
			<div className='order'>
				<div className='order__main'>
					<div className='order__main-bg' />
					<OrderShort />
					<OrderContent />
				</div>

				<FaqGroup>
					{faq.map((group, index) => (
						<Faq data={group} key={index} />
					))}
				</FaqGroup>
			</div>
		);
	}
}
