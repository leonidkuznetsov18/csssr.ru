import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Content from 'components/content';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobBanner from 'components/job-banner';
import Circloader from 'components/circloader';
import FormJob from 'containers/form-job';
import PageError from 'containers/page-error';
import { requestVacancies } from 'actions/vacancies';
import mdToHtmlLink from 'helpers/md-to-html-link';
import mdToHtmlStrike from 'helpers/md-to-html-strike';

const formatText = (str) => mdToHtmlStrike(mdToHtmlLink(str));

const defaultFieldPropTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string,
	text: PropTypes.string,
	boldText: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.string),
};

const vacancyPropTypes = PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.string.isRequired,
	createDate: PropTypes.string.isRequired,
	editDate: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	isArchived: PropTypes.bool.isRequired,
	pathName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	maxFileSize: PropTypes.number.isRequired,
	fileExt: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape({
		...defaultFieldPropTypes,
		fileSize: PropTypes.string,
		fileExt: PropTypes.string,
		fileName: PropTypes.string,
		fileLink: PropTypes.string,
		sections: PropTypes.arrayOf(PropTypes.shape(defaultFieldPropTypes)),
	})).isRequired,
}));

@connect(({ vacancies }) => ({ vacancies }))
export default class PageJobForm extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		params: PropTypes.object,
		vacancies: PropTypes.shape({
			isFetching: PropTypes.bool.isRequired,
			data: PropTypes.shape({
				active: vacancyPropTypes,
				preview: vacancyPropTypes,
			}).isRequired,
		}).isRequired,
	}

	componentDidMount() {
		this.props.dispatch(requestVacancies('preview'));
	}

	getVacancy(pathName) {
		return this.props.vacancies.data.preview.find((item) => item.pathName === pathName);
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

	getMeta({ name, pathName }) {
		return {
			title: `Вакансия «${name}»`,
			meta: [
				{
					name: 'og:title',
					content: `Вакансия «${name}»`,
				},
				{
					name: 'og:url',
					content: `http://csssr.ru/jobs/${pathName}`,
				},
			],
		};
	}

	renderVacancy(vacancy) {
		const fileType = this.getFileType(vacancy);
		const data = this.getData(vacancy);

		return (
			<div>
				{data.beforeQuest && <SectionGroup data={data.beforeQuest} />}
				{data.quest && <Quest file={data.file}>
					<SectionGroup data={data.quest} />
				</Quest>}
				{data.afterQuest && <SectionGroup data={data.afterQuest} />}
				<FormJob fileType={fileType} />
			</div>
		);
	}

	render() {
		const { isFetching } = this.props.vacancies;
		const page = this.props.params.jobName;
		const vacancy = this.getVacancy(page);

		if (!vacancy && !isFetching) {
			return <PageError {...this.props} number={404} />;
		}

		return (
			<div>
				{!isFetching && <Helmet {...this.getMeta(vacancy)} />}
				<Content layout='job'>
					{!isFetching && <JobBanner />}
					{isFetching && <Circloader />}
					{!isFetching && this.renderVacancy(vacancy)}
				</Content>
			</div>
		);
	}
}
