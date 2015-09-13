import React from 'react';
import FaqSingle from 'components/order-faq-single';

import './styles.css';

const data = require('data/faq.json');

export default class Faq extends React.Component {

	render() {
		const fhqBlocks = data.map((block, i) => {
			return (
				<FaqSingle key={i} data={block} />
			);
		});
		return (
			<div id='faq' className='order__faq'>
				{fhqBlocks}
			</div>
		);
	}

}
