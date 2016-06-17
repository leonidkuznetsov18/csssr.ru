import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestVacancies } from 'actions/vacancies';
import PageJobForm from 'containers/page-job-form';
import PageError from 'containers/page-error';
import Helmet from 'react-helmet';
import VacancyContent from 'components/vacancy-content';
import Circloader from 'components/circloader';
import Warning from 'components/warning';

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
export default class PageVacancy extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		filter: PropTypes.string.isRequired,
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
		this.props.dispatch(requestVacancies(this.props.filter));
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

	render() {
		const { vacancies, filter } = this.props;
		const { isFetching, error } = vacancies;

		if (isFetching) {
			return (
				<VacancyContent>
					<Helmet title={'Вакансия'} />
					<Circloader />
				</VacancyContent>
			);
		}

		const page = this.props.params.jobName;
		const vacancy = vacancies.data[filter].find((item) => item.pathName === page);

		if (error) {
			return (
				<VacancyContent>
					<Warning>
						Извините, на сайте ведутся технические работы.
						<br />
						Для просмотра доступных вакансий попробуйте обновить страницу позже.
					</Warning>
				</VacancyContent>
			);
		}

		if (!vacancy) {
			return <PageError {...this.props} number={404} />;
		}

		return (
			<div>
				<Helmet {...this.getMeta(vacancy)} />
				<PageJobForm vacancy={vacancy} />
			</div>
		);
	}
}
