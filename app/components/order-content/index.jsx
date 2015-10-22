import React from 'react';
import Row from 'components/row';
import Title from 'components/title';
import Text from 'components/text';
import OrderForm from 'containers/order-form';
import Section from 'components/section';

import './styles.css';

const data = require('data/order-content.json');


export default class OrderContent extends React.Component {
	render() {
		return (
			<div className='order__main__content'>
				<Title>{data.title}</Title>
				<div style={{width: '95%'}}>
					{data.description.map((content, i) => <Text key={i}>{content}</Text>)}
					<div dangerouslySetInnerHTML={{__html: '<!--noindex-->'}} />
					<OrderForm />
					<div dangerouslySetInnerHTML={{__html: '<!--/noindex-->'}} />
				</div>
			</div>
		);
	}
}

