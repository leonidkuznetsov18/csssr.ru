import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestVacancies } from 'actions/vacancies';
import PageJobForm from 'containers/page-job-form';
import PageError from 'containers/page-error';
import Helmet from 'react-helmet';
import Content from 'components/content';
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
			data: PropTypes.shape({
				active: vacancyPropTypes,
				preview: vacancyPropTypes,
			}).isRequired,
			error: PropTypes.any,
			isFetching: PropTypes.bool.isRequired,
		}).isRequired,
	}

	state = {
		isFetching: false,
		isFetched: false,
	}

	componentDidMount() {
		const filter = this.props.params.filter || 'active';
		this.props.dispatch(requestVacancies(filter));
	}

	componentWillReceiveProps(props) {
		const { isFetching } = props.vacancies;

		if (isFetching) {
			this.setState({
				isFetching: true,
			});
		}

		if (!isFetching && this.state.isFetching) {
			this.setState({
				isFetching: false,
				isFetched: true,
			});
		}
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
		const { vacancies } = this.props;
		const { isFetching, error } = vacancies;
		const filter = this.props.params.filter || 'active';

		if (isFetching) {
			return (
				<Content layout='vacancy'>
					<Helmet title={'Вакансия'} />
					<Circloader />
				</Content>
			);
		}

		const page = this.props.params.jobName;
		const vacancy = vacancies.data[filter].find((item) => item.pathName === page);

		if (error) {
			return (
				<Content layout='vacancy'>
					{error === 'NO_CONNECT' ? <Warning>
						У вас отсутствует соединение с интернетом.
						<br />
						Для просмотра доступных вакансий подключитесь к интернету
						<br />
						и попробуйте обновить страницу.
					</Warning> : <Warning>
						Извините, на сайте ведутся технические работы.
						<br />
						Для просмотра доступных вакансий попробуйте&nbsp;обновить&nbsp;страницу&nbsp;позже.
					</Warning>}
				</Content>
			);
		}

		if (!this.state.isFetched) {
			return null;
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
