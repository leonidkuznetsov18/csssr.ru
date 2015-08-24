import React from 'react';
import Section from 'components/section';
import JobsVacancy from 'components/jobs-vacancy';
import JobsEmail from 'components/jobs-email';
import JobsStaff from 'components/jobs-staff';

import './styles.css';

const data = require('data/jobs-about.json');

export default class JobsAbout extends React.Component {
	render() {
		return (
			<div className='jobs-about'>
				{data.slice(0, 2).map(group => (
					<div className='jobs-about__group'>
						<Section {...group} />
					</div>
				))}
				<div className='jobs-about__group'>
					<Section {...data.slice(2, 3)[0]}>
						<JobsVacancy />
					</Section>
				</div>
				{data.slice(3).map(group => (
					<div className='jobs-about__group'>
						<Section {...group} />
					</div>
				))}
				<JobsStaff />
				<JobsEmail />
			</div>
		);
	}
}
