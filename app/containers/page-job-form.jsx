import React, { Component } from 'react';
import { vacancyShape } from 'helpers/propTypes';
import formatVacancy from 'helpers/formatVacancy';
import Content from 'components/content';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobBanner from 'components/job-banner';
import FormJob from 'containers/form-job';
import Breadcrubms from 'components/breadcrumbs';

export default class PageJobForm extends Component {
	static propTypes = {
		vacancy: vacancyShape,
	}

	getFileType(vacancy) {
		const { fileExt, maxFileSize } = vacancy;
		const capitalExt = fileExt.toUpperCase();

		return {
			fileAccept: `.${fileExt}`,
			regexp: new RegExp(`\\.${fileExt}$`, 'i'),
			fileWarning: `${capitalExt}, пожалуйста!`,
			fileWarningSize: `${capitalExt}, пожалуйста (макс. ${maxFileSize} MB)!`,
			maxSize: maxFileSize * 1024 * 1024,
		};
	}

	render() {
		const { vacancy } = this.props;
		const { hasResume, hasPortfolio, pathName } = vacancy;
		const fileType = this.getFileType(vacancy);
		const data = formatVacancy(vacancy);

		return (
			<div>
				<Breadcrubms
					items={
						[
							{
								link: '/jobs',
								name: 'Все вакансии',
							},
							{
								name: vacancy.name,
							},
						]
					}
				/>
				<Content layout='job'>
					<JobBanner />
					{data.beforeQuest && <SectionGroup data={data.beforeQuest} />}
					{data.quest && <Quest file={data.file}>
						<SectionGroup data={data.quest} />
					</Quest>}
					{data.afterQuest && <SectionGroup data={data.afterQuest} />}
					<FormJob
						fileType={fileType}
						jobName={pathName}
						options={{
							hasResume,
							hasPortfolio,
						}}
					/>
				</Content>
			</div>
		);
	}
}
