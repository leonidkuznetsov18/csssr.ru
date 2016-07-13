import React from 'react';
import History from './index.jsx';
import storiesOf from 'utils/storiesOf';

const history = require('data/history.json');

storiesOf('History')
	.add('default', () => (
		<History data={history} />
	));
