import React from 'react';
import OptionsList from 'components/order-options-list'

import './styles.css';

const data = require('data/order-options.json');

export default class OrderOptions extends React.Component {
	render() {

		const options = data.options.map((option) => {
			return <OptionsList data={option} />;
		});

		return (
			<div className='order__main__content__options'>
				{options}
			</div>
		);
	}
}
