import React from 'react';
import OutsourceProject from './index.jsx';
import storiesOf from 'utils/storiesOf';

const partners = require('data/partners.js').default;

partners.forEach((partner) =>
	storiesOf('OutsourceProject')
		.add(partner.name, () => (
			<OutsourceProject partner={partner} />
		))
);
