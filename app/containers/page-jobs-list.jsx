import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
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
export default class PageJobsList extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		vacancies: PropTypes.shape({
			data: PropTypes.shape({
				active: vacancyPropTypes,
				preview: vacancyPropTypes,
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
