import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { vacanciesShape } from 'helpers/propTypes';
import JobsBanner from 'components/jobs-banner';
import JobsWidget from 'components/jobs-widget';
import JobsVacancy from 'components/jobs-vacancy';
import JobsEmail from 'components/jobs-email';
import JobsStaff from 'components/jobs-staff';
import Row from 'components/row';
import Column from 'components/column';
import Section from 'components/section';
import Content from 'components/content';
import Circloader from 'components/circloader';
import Warning from 'components/warning';
import { jobs } from 'data/meta';
import { requestVacancies } from 'actions/vacancies';

const dataAbout = require('data/jobs-about.json');
const dataStaff = require('data/jobs-staff.json');

@connect(({ vacancies }) => ({ vacancies }))
export default class PageJobsList extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
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
		this.props.dispatch(requestVacancies('active'));
	}

	render() {
		const { data, isFetching, error } = this.props.vacancies;
		const vacancies = data.active.map(({ name, pathName }) => ({
			name,
			url: `/jobs/${pathName}`,
		}));

		return (
			<div>
				<Helmet {...jobs} />
				<JobsBanner />
				<Content>
					<Row>
						<Column>
							<JobsWidget />
						</Column>

						<Column size={2 / 3}>
							{dataAbout.slice(0, 2).map((group, index) => (
								<Section
									{...group}
									indent
									key={index}
								/>
							))}

							<Section
								{...dataAbout.slice(2, 3)[0]}
								indent
							>
								{!isFetching && error && (error === 'NO_CONNECT' ? <Warning>
									У вас отсутствует соединение с интернетом.
									<br />
									Для просмотра доступных вакансий подключитесь к интернету
									<br />
									и попробуйте обновить страницу.
								</Warning> : <Warning>
									Извините, на сайте ведутся технические работы.
									<br />
									Для просмотра доступных вакансий попробуйте обновить страницу позже.
								</Warning>)}
								{isFetching && <Circloader />}
								{!(isFetching || error) && <JobsVacancy data={vacancies} />}
							</Section>

							{dataAbout.slice(3).map((group, index) => (
								<Section
									{...group}
									indent
									key={index}
								/>
							))}

							<JobsStaff data={dataStaff} />
							<JobsEmail />
						</Column>
					</Row>
				</Content>
			</div>
		);
	}
}
