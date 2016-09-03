import React from 'react';
import Offert from './index.jsx';
import storiesOf from 'utils/storiesOf';

const offert = require('data/offert.json');
const confidential = require('data/confidential.json');

storiesOf('Offert')
	.add('offert', () => (
		<Offert data={offert} />
	))
	.add('confidential', () => (
		<Offert data={confidential} />
	));
