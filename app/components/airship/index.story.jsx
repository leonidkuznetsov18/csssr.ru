import React from 'react';
import Airship from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Airship')
	.add('index', () => (
		<Airship image='zeppelin_index.svg' />
	))
	.add('order', () => (
		<Airship image='zeppelin_order.svg' />
	));
