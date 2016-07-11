import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { vacanciesShape } from 'helpers/propTypes';
import { requestVacancies } from 'actions/vacancies';
import PageJobForm from 'containers/page-job-form';
import PageError from 'containers/page-error';
import Helmet from 'react-helmet';
import Content from 'components/content';
import Circloader from 'components/circloader';
import WarningJobs from 'components/warning-jobs';

@connect(({ vacancies }) => ({ vacancies }))
export default class PageVacancy extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		params: PropTypes.object,
		vacancies: PropTypes.shape({
			data: PropTypes.shape({
				active: vacanciesShape,
				preview: vacanciesShape,
			}).isRequired,
			error: PropTypes.any,
			isFetching: PropTypes.bool.isRequired,
		}).isRequired,
	}

	componentWillMount() {
		const filter = this.props.params.filter || 'active';
		this.props.dispatch(requestVacancies(filter));
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
					<WarningJobs error={error} />
				</Content>
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
