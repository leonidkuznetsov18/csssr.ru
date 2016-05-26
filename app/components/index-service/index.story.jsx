import React from 'react';
import IndexService from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataService = require('data/service.json');

storiesOf('IndexService')
	.add('default', () => (
		<IndexService data={dataService} />
	));
