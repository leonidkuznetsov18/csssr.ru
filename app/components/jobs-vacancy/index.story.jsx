import React from 'react';
import JobsVacancy from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataVacancy = require('data/jobs-vacancy.json');

storiesOf('JobsVacancy')
	.add('default', () => (
		<JobsVacancy data={dataVacancy} />
	));
