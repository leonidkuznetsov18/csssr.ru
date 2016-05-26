import React from 'react';
import Faq from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const faqOrder = require('data/faq-order.json');
const faqOutsource = require('data/faq-outsource.json');

faqOrder.concat(faqOutsource).forEach((faq) =>
	storiesOf('Faq')
		.add(faq.title, () => (
			<Faq data={faq} />
		))
);
