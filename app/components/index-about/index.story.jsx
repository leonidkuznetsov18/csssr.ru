import React from 'react';
import IndexAbout from './index.jsx';
import storiesOf from 'utils/storiesOf';

const dataDescription = require('data/description.json');

storiesOf('IndexAbout')
	.add('default', () => (
		<IndexAbout data={dataDescription} />
	));
