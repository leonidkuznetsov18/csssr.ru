import React from 'react';
import OrderForm from 'components/order-form';
import Section from 'components/section';

import './styles.css';

const data = require('data/order-content.json');


export default class OrderContent extends React.Component {
	render() {
		return (
			<div className='order__main__content'>
				<Section
					title={data.title}
					description={data.description}
				/>
				<p
					className='order__main__content__text comment'
					dangerouslySetInnerHTML={{__html: data.text}}
				/>
				<div dangerouslySetInnerHTML={{__html: '<!--noindex-->'}} />
				<OrderForm />
				<div dangerouslySetInnerHTML={{__html: '<!--/noindex-->'}} />
			</div>
		);
	}
}

