import React from 'react';
import Service from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataService = require('data/service.json');

dataService.forEach((service, index) =>
	storiesOf('Service')
		.add(index, () => (
			<Service service={service} />
		))
);
