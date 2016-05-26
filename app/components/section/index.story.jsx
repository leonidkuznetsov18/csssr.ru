import React from 'react';
import Section from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const data = require('data/company-about.json');

storiesOf('Section')
	.add('default', () => (
		<Section {...data[1]} />
	));
