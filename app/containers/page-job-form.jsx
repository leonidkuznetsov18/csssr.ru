import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Breadcrubms from 'components/breadcrumbs';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobBanner from 'components/job-banner';
import FormJob from 'containers/form-job';
import { job } from 'data/meta';

const pages = {
	'technical-manager': 'Менеджер-технарь',
	'pixel-perfectionist': 'Верстальщик пиксель-перфекционист',
};
const dataList = {
	'pixel-perfectionist': require('data/jobs/pixel-perfectionist.json'),
	'technical-manager': require('data/jobs/technical-manager.json'),
};

export default class PageJobForm extends React.Component {
	static propTypes = {
		location: React.PropTypes.object,
		params: React.PropTypes.object,
	}

	render() {
		const page = this.props.params.jobName;
		const pageName = pages[page];
		const data = dataList[page];

		return (
			<div>
				<Helmet {...job[page]} />

				<Breadcrubms items={[
					{
						link: '/jobs',
						name: 'Все вакансии',
					},
					{
						name: pageName,
					},
				]}/>

				<Content layout='job'>
					<JobBanner/>
					{data.beforeQuest &&
						<SectionGroup data={data.beforeQuest}/>
					}

					{data.quest &&
						<Quest file={data.file} horizon={page === 'technical-manager'}>
							<SectionGroup data={data.quest}/>
						</Quest>
					}

					{data.afterQuest &&
						<SectionGroup data={data.afterQuest}/>
					}

					<FormJob jobName={page}/>
				</Content>
			</div>
		);
	}
}