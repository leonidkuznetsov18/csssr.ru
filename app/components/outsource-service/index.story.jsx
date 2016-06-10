import React from 'react';
import OutsourceService from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const data = require('data/outsource.json');

data.events.cols.forEach((event) =>
	storiesOf('OutsourceService')
		.add(event.title, () => (
			<OutsourceService {...event} />
		))
);