import React from 'react';
import OrderOptions from './index.jsx';
import storiesOf from 'utils/storiesOf';

const options = require('data/order-options.json');

storiesOf('OrderOptions')
	.add('default', () => (
		<OrderOptions options={options} />
	));
