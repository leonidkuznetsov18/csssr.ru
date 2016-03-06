import React from 'react';
import Helmet from 'react-helmet';

import JobsBanner from 'components/jobs-banner';
import JobsWidget from 'components/jobs-widget';
import JobsVacancy from 'components/jobs-vacancy';
import JobsEmail from 'components/jobs-email';
import JobsStaff from 'components/jobs-staff';
import Row from 'components/row';
import Column from 'components/column';
import Section from 'components/section';
import Content from 'components/content';
import { jobs } from 'data/meta';

const dataAbout = require('data/jobs-about.json');
const dataStaff = require('data/jobs-staff.json');
const dataVacancy = require('data/jobs-vacancy.json');

export default class PageJobsList extends React.Component {
	render() {
		return (
			<div>
				<Helmet {...jobs} />
				<JobsBanner/>
				<Content>
					<Row>
						<Column>
							<JobsWidget />
						</Column>

						<Column size={2 / 3}>
							{dataAbout.slice(0, 2).map((group, index) => (
								<Section {...group} indent={true} key={index}/>
							))}

							<Section
								{...dataAbout.slice(2, 3)[0]}
								indent={true}
							>
								<JobsVacancy data={dataVacancy} />
							</Section>

							{dataAbout.slice(3).map((group, index) => (
								<Section {...group} indent={true} key={index}/>
							))}

							<JobsStaff data={dataStaff}/>
							<JobsEmail />
						</Column>
					</Row>
				</Content>
			</div>
		);
	}
}
