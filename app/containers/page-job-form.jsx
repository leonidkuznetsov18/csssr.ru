import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Breadcrubms from 'components/breadcrumbs';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobBanner from 'components/job-banner';
import FormJob from 'containers/form-job';
import { job } from 'data/meta';
import PageError from 'containers/page-error';

const pages = {
	'technical-manager': 'Менеджер-технарь',
	'pixel-perfectionist': 'Верстальщик пиксель-перфекционист',
	'hr-manager': 'HR-менеджер',
	'ui-ux-designer': 'UI/UX-дизайнер',
};
const dataList = {
	'pixel-perfectionist': require('data/jobs/pixel-perfectionist.json'),
	'technical-manager': require('data/jobs/technical-manager.json'),
	'hr-manager': require('data/jobs/hr-manager.json'),
	'ui-ux-designer': require('data/jobs/ui-ux-designer.json'),
};

export default function PageJobForm(props) {
	const page = props.params.jobName;
	const pageName = pages[page];
	const data = dataList[page];

	if (!pageName) {
		return (
			<PageError {...props} number={404} />
		);
	}

	return (
		<div>
			<Helmet {...job[page]} />

			<Breadcrubms
				items={
					[
						{
							link: '/jobs',
							name: 'Все вакансии',
						},
						{
							name: pageName,
						},
					]
				}
			/>

			<Content layout='job'>
				<JobBanner />
				{data.beforeQuest &&
					<SectionGroup data={data.beforeQuest} />
				}

				{data.quest &&
					<Quest file={data.file}>
						<SectionGroup data={data.quest} />
					</Quest>
				}

				{data.afterQuest &&
					<SectionGroup data={data.afterQuest} />
				}

				<FormJob jobName={page} options={data.options} />
			</Content>
		</div>
	);
}

PageJobForm.propTypes = {
	params: React.PropTypes.object,
};
