import React from 'react';
import Description from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataDescription = require('data/description.json');

storiesOf('Description')
	.add('default', () => (
		<Description data={dataDescription} />
	));
