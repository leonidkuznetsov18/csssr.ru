import React from 'react';
import FaqGroup from './index.jsx';
import Faq from 'components/faq';
import storiesOf from 'helpers/storiesOf';

const faqOrder = require('data/faq-order.json');
const faqOutsource = require('data/faq-outsource.json');

storiesOf('FaqGroup')
	.add('Order', () => (
		<FaqGroup>
			{faqOrder.map((group, index) => (
				<Faq data={group} key={index} />
			))}
		</FaqGroup>
	))
	.add('Outsource', () => (
		<FaqGroup>
			{faqOutsource.map((group, index) => (
				<Faq data={group} key={index} />
			))}
		</FaqGroup>
	));
