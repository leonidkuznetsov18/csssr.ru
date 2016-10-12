import React, { Component, PropTypes } from 'react';
import Content from 'components/content';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import Quests from 'components/quests';
import JobBanner from 'components/job-banner';
import FormJob from 'containers/form-job';
import Breadcrubms from 'components/breadcrumbs';
import mdToHtmlLink from 'utils/md-to-html-link';
import mdToHtmlStrike from 'utils/md-to-html-strike';
import jobFormSection from 'data/job-form-section';
import questSection from 'data/job-quest-section';
import questsData from 'data/quests';
import updateQuests from 'utils/update-quests';

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
			hasGithub: PropTypes.bool.isRequired,
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

	state = {
		quests: questsData,
	}

	handleChangeQuests = (id, data) => {
		this.setState({
			quests: updateQuests(this.state.quests, id, data),
		});
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
		const { hasResume, hasPortfolio, hasGithub, hasComment, hasFile, pathName } = vacancy;
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
					{hasFile && data.quest && <Quest file={data.file}>
						<SectionGroup data={data.quest} />
					</Quest>}
					{data.afterQuest && <SectionGroup data={data.afterQuest} />}
					{!hasFile && <Quest>
						<SectionGroup data={questSection} />
						<Quests
							data={this.state.quests}
							onChange={this.handleChangeQuests}
						/>
					</Quest>}
					{!hasFile && <SectionGroup data={jobFormSection} />}
					<FormJob
						jobName={pathName}
						options={{
							hasResume,
							hasPortfolio,
							hasGithub,
							hasComment,
							hasFile,
						}}
						quests={this.state.quests}
						vacancy={vacancy}
					/>
				</Content>
			</div>
		);
	}
}
