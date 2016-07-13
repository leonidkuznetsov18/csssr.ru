import React from 'react';
import Service from './index.jsx';
import storiesOf from 'utils/storiesOf';

const dataService = require('data/service.json');

dataService.forEach((service, index) =>
	storiesOf('Service')
		.add(index, () => (
			<Service service={service} />
		))
);
