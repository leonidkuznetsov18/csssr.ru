import React from 'react';
import JobsStaff from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataStaff = require('data/jobs-staff.json');

storiesOf('JobsStaff')
	.add('default', () => (
		<JobsStaff data={dataStaff} />
	));
