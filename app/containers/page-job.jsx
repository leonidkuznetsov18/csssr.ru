import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestVacancies } from 'actions/vacancies';
import { vacanciesShape } from 'helpers/propTypes';
import { job as getMeta } from 'data/meta';
import PageVacancy from 'containers/page-vacancy';
import Helmet from 'react-helmet';
import Content from 'components/content';
import Circloader from 'components/circloader';
import WarningJobs from 'components/warning-jobs';
import PageError from 'containers/page-error';

@connect(({ vacancies }) => ({ vacancies }))
export default class PageJob extends Component {

	static fetchData({ params, store }) {
		return store.dispatch(requestVacancies(params.filter || 'active'));
	}

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
		]),
		dispatch: PropTypes.func.isRequired,
		routeParams: PropTypes.object,
		vacancies: PropTypes.shape({
			data: PropTypes.shape({
				active: vacanciesShape,
				preview: vacanciesShape,
			}).isRequired,
			error: PropTypes.any,
			isFetching: PropTypes.bool.isRequired,
		}).isRequired,
	}

	componentDidMount() {
		if (!this.props.vacancies.data.active.length) {
			this.props.dispatch(requestVacancies(this.props.routeParams.filter || 'active'));
		}
	}

	renderChildrens(props, vacancy) {
		return React.Children.map(props.children, (child) => {
			if (child.type === PageVacancy) {
				return React.cloneElement(child, { ...props, vacancy });
			}
			return child;
		});
	}

	render() {
		const { vacancies } = this.props;
		const { isFetching, error } = vacancies;
		const filter = this.props.routeParams.filter || 'active';

		if (isFetching) {
			return (
				<Content layout='vacancy'>
					<Helmet title={'Вакансия'} />
					<Circloader />
				</Content>
			);
		}

		const page = this.props.routeParams.jobName;
		const vacancy = vacancies.data[filter].find((item) => item.pathName === page);

		if (error) {
			return (
				<Content layout='vacancy'>
					<WarningJobs error={error} />
				</Content>
			);
		}

		if (!vacancy) {
			return (
				<div>
					<PageError {...this.props} number={404} />
				</div>
			);
		}

		return (
			<div>
				<Helmet { ...getMeta(vacancy) } />
				{this.renderChildrens(this.props, vacancy)}
			</div>
		);
	}
}
