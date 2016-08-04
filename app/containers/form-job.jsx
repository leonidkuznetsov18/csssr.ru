import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { sendAnswerForm, setEmptyFields } from 'actions/jobs';
import JobForm from 'components/job-form';
import rEmail from 'regex-email';
import pick from 'lodash.pick';

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
		fileType: React.PropTypes.object,
		handleSubmit: React.PropTypes.func.isRequired,
		jobName: React.PropTypes.string,
		options: React.PropTypes.object,
	}

	onSubmit = () => this.props.handleSubmit((values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = {};
			let haveErrors = false;
			const { hasResume, hasPortfolio } = this.props.options;
			const optionalFields = {
				resume: hasResume,
				portfolio: hasPortfolio,
				comment: false,
			};

			const fields = Object.keys(values).filter((item) =>
				typeof optionalFields[item] === 'boolean' ? optionalFields[item] : true
			);

			fields.forEach((key) => {
				const value = values[key];

				if (key === 'file') {
					const fileSpec = this.props.fileType;
					const file = value && value.length && value[0];

					if (!value || !value.length || !fileSpec.regexp.test(file.name)) {
						errors[key] = fileSpec.fileWarning;
						haveErrors = true;
					} else if (file.size > fileSpec.maxSize) {
						errors[key] = fileSpec.fileWarningSize;
						haveErrors = true;
					}

					return;
				}

				if (key === 'email' && !rEmail.test(value)) {
					errors[key] = true;
					haveErrors = true;
				}

				if (key === 'phone' && value && value.length < 12) {
					errors[key] = true;
					haveErrors = true;
				}

				if (!value) {
					errors[key] = true;
					haveErrors = true;
				}
			});

			console.log(errors);

			if (haveErrors) {
				dispatch(setEmptyFields());
				reject(errors);
				return;
			}

			dispatch(sendAnswerForm({
				...pick(values, fields),
				vacancy: this.props.jobName,
			}));
		});
	})

	render() {
		return (
			<JobForm
				{...this.props}
				{...this.props.fileType}
				handleSubmit={this.onSubmit()}
				options={this.props.options}
			/>
		);
	}
}
