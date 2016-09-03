import React from 'react';
import Airship from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Airship')
	.add('index', () => (
		<Airship image={require('../../images/background/zeppelin_index.svg')} />
	))
	.add('order', () => (
		<Airship image={require('../../images/background/zeppelin_order.svg')} />
	));
