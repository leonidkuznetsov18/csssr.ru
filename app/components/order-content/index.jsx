import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import FormOrder from 'containers/form-order';

import './styles.css';

const data = require('data/order-content.json');

export default class OrderContent extends React.Component {
	render() {
		return (
			<div className='order__main__content'>
				<Title>{data.title}</Title>
				<div style={{ width: '90%' }}>
					<Text>{data.description[0]}</Text>
					{data.description.slice(1).map((content, i) => <Text size='m' key={i}>{content}</Text>)}
					<div dangerouslySetInnerHTML={{ __html: '<!--noindex-->' }} />
					<FormOrder />
					<div dangerouslySetInnerHTML={{ __html: '<!--/noindex-->' }} />
				</div>
			</div>
		);
	}
}
