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
		component: React.PropTypes.oneOfType([
			React.PropTypes.element,
			React.PropTypes.func,
		]),
		handleSubmit: React.PropTypes.func.isRequired,
		jobName: React.PropTypes.string,
		options: React.PropTypes.object,
		vacancy: React.PropTypes.object,
	};

	static defaultProps = {
		component: JobForm,
		options: {},
		vacancy: {},
	};

	getFileType(vacancy) {
		const { fileExt, maxFileSize } = vacancy;
		const capitalExt = fileExt.toUpperCase();

		return {
			fileAccept: `.${fileExt}`,
			regexp: new RegExp(`\\.${fileExt}$`, 'i'),
			fileWarning: `${capitalExt}, пожалуйста!`,
			fileWarningSize: `${capitalExt}, пожалуйста (макс. ${maxFileSize} MB)!`,
			maxSize: maxFileSize * 1024 * 1024,
		};
	}

	onSubmit = () => this.props.handleSubmit((values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = {};
			let haveErrors = false;
			const { hasResume, hasPortfolio, hasComment } = this.props.options;
			const optionalFields = {
				resume: hasResume,
				portfolio: hasPortfolio,
				comment: hasComment,
			};

			const fields = Object.keys(values).filter((item) =>
				typeof optionalFields[item] === 'boolean' ? optionalFields[item] : true
			);

			fields
				.filter((item) => item !== 'comment')
				.forEach((key) => {
					const value = values[key];

					if (key === 'file') {
						const fileSpec = this.getFileType(this.props.vacancy);
						const file = value && value[0];

						if (!value || file && !fileSpec.regexp.test(file.name)) {
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

			if (hasComment && !values.comment) {
				values.comment = '';
			}

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
		const Form = this.props.component;

		return (
			<Form
				{...this.props}
				{...this.getFileType(this.props.vacancy)}
				handleSubmit={this.onSubmit()}
				options={this.props.options}
			/>
		);
	}
}
