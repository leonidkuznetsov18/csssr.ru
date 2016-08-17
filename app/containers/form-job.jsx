import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { sendAnswerForm } from 'actions/jobs';
import JobForm from 'components/job-form';
import getError from 'utils/getError';
import validator, { containErrors } from 'utils/validator';

@reduxForm({
	form: 'job',
	fields: [
		'firstname',
		'lastname',
		'age',
		'location',
		'resume',
		'portfolio',
		'file',
		'email',
		'skype',
		'phone',
		'comment',
	],
})
export default class PageJob extends Component {
	static propTypes = {
		error: React.PropTypes.any,
		fileType: React.PropTypes.object,
		handleSubmit: React.PropTypes.func.isRequired,
		jobName: React.PropTypes.string,
		options: React.PropTypes.object,
	}

	handleSubmit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			const { hasResume, hasPortfolio, hasComment } = this.props.options;
			const errors = validator(values, {
				file: {
					file: this.props.fileType,
				},
				skype: {
					required: true,
				},
				phone: {
					required: true,
				},
				resume: {
					required: !!hasResume,
				},
				portfolio: {
					required: !!hasPortfolio,
				},
			});
			const haveErrors = containErrors(errors);

			if (hasComment && !values.comment) {
				values.comment = '';
			}

			if (haveErrors) {
				reject({
					...errors,
					_error: 'EMPTY_FIELDS',
				});

				return;
			}

			dispatch(sendAnswerForm({
				...values,
				vacancy: this.props.jobName,
			}));
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		const { error } = this.props;

		return (
			<JobForm
				{...this.props}
				{...this.props.fileType}
				error={getError(error, 'job')}
				handleSubmit={handleSubmit}
				options={this.props.options}
			/>
		);
	}
}
