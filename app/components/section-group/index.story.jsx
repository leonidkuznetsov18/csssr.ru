import React from 'react';
import SectionGroup from './index.jsx';
import storiesOf from 'utils/storiesOf';

const data = require('data/company-about.json');

storiesOf('SectionGroup')
	.add('default', () => (
		<SectionGroup data={data} />
	));
