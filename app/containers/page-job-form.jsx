import React, { Component, PropTypes } from 'react';
import Content from 'components/content';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobBanner from 'components/job-banner';
import FormJob from 'containers/form-job';
import Breadcrubms from 'components/breadcrumbs';
import mdToHtmlLink from 'helpers/md-to-html-link';
import mdToHtmlStrike from 'helpers/md-to-html-strike';

const formatText = (str) => mdToHtmlStrike(mdToHtmlLink(str));

const defaultFieldPropTypes = {
	boldText: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.string),
	text: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string.isRequired,
};

export default class PageJobForm extends Component {
	static propTypes = {
		vacancy: PropTypes.shape({
			createDate: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			editDate: PropTypes.string.isRequired,
			fileExt: PropTypes.string.isRequired,
			hasPortfolio: PropTypes.bool.isRequired,
			hasResume: PropTypes.bool.isRequired,
			id: PropTypes.string.isRequired,
			isActive: PropTypes.bool.isRequired,
			isArchived: PropTypes.bool.isRequired,
			maxFileSize: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			pathName: PropTypes.string.isRequired,
			sections: PropTypes.arrayOf(PropTypes.shape({
				...defaultFieldPropTypes,
				fileExt: PropTypes.string,
				fileLink: PropTypes.string,
				fileName: PropTypes.string,
				fileSize: PropTypes.string,
				sections: PropTypes.arrayOf(PropTypes.shape(defaultFieldPropTypes)),
			})).isRequired,
		}),
	}

	getFileType(vacancy) {
		const { fileExt, maxFileSize } = vacancy;
		const capitalExt = fileExt.toUpperCase();

		return {
			fileAccept: `.${fileExt}`,
			regexp: new RegExp(`\\.${fileExt}$`),
			fileWarning: `${capitalExt}, пожалуйста!`,
			fileWarningSize: `${capitalExt}, пожалуйста (макс. ${maxFileSize} MB)!`,
			maxSize: maxFileSize * 1024 * 1024,
		};
	}

	formatSection({ title, text, boldText, list }, { isSubSection = false, titleProps } = {}) {
		const data = {};

		if (title) {
			data.title = {
				text: title,
				props: titleProps || {
					size: isSubSection ? 'small' : 'medium',
				},
			};
		}

		if (text) {
			data.description = {
				text: formatText(text),
				props: boldText ? {
					weight: 'normal',
				} : {
					size: 'm',
				},
			};
		}

		if (list) {
			data.list = {
				items: list.map((item) => formatText(item)),
				props: {
					size: isSubSection ? 'xs' : 's',
				},
			};
		}

		return data;
	}

	getData({ name, description, sections }) {
		const questIndex = sections.findIndex((item) => item.type === 'quest');
		const data = {
			beforeQuest: [this.formatSection({
				title: name,
				text: description,
			}, { titleProps: {} })],
		};

		if (questIndex >= 0) {
			data.beforeQuest = [
				...data.beforeQuest,
				...sections.slice(0, questIndex).map((item) => this.formatSection(item)),
			];
			const quest = sections[questIndex];
			data.quest = [
				this.formatSection(quest),
				...quest.sections.map((item) => this.formatSection(item, { isSubSection: true })),
			];
			data.file = {
				type: quest.fileExt,
				filename: quest.fileName,
				link: quest.fileLink,
				size: quest.fileSize,
			};
			data.afterQuest = sections.slice(questIndex + 1).map(this.formatSection);
		} else {
			data.beforeQuest = [
				...data.beforeQuest,
				...sections.map(this.formatSection),
			];
		}

		return data;
	}

	render() {
		const { vacancy } = this.props;
		const { hasResume, hasPortfolio, pathName } = vacancy;
		const fileType = this.getFileType(vacancy);
		const data = this.getData(vacancy);

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
