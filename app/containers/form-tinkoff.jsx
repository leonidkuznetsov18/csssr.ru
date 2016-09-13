import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestVacancies } from 'actions/vacancies';

import TinkoffForm from 'components/tinkoff/tinkoff-form';
import FormJob from 'containers/form-job';

@connect(({ vacancies }) => ({ vacancies }))
export default class FormTinkoff extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		vacancies: PropTypes.object,
	};

	componentDidMount() {
		this.props.dispatch(requestVacancies('active'));
	}

	render() {
		const vacancy = this.props.vacancies.data.active
			.filter((vac) => vac.pathName === 'tinkoff-bank-js-developer')[0];

		if (!vacancy) {
			return null;
		}

		const { hasResume, hasPortfolio, hasComment, pathName } = vacancy;

		return (
			<FormJob
				component={TinkoffForm}
				jobName={pathName}
				options={{
					hasResume,
					hasPortfolio,
					hasComment,
				}}
				vacancy={vacancy}
			/>
		);
	}
}

export default FormTinkoff;
