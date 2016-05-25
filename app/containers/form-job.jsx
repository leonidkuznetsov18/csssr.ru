import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { sendAnswerForm, setEmptyFields } from 'actions/jobs';
import JobForm from 'components/job-form';
import rEmail from 'regex-email';

const fileTypes = {
	'pixel-perfectionist': {
		fileAccept: '.zip',
		regexp: /\.zip$/,
		fileWarning: 'ZIP, пожалуйста!',
		fileWarningSize: 'ZIP, пожалуйста (макс. 16 MB)!',
		maxSize: 16 * 1024 * 1024,
	},
	'technical-manager': {
		fileAccept: '.docx',
		regexp: /\.docx$/,
		fileWarning: 'DOCX, пожалуйста!',
		fileWarningSize: 'DOCX, пожалуйста (макс. 16 MB)!',
		maxSize: 16 * 1024 * 1024,
	},
	'one-site-designer': {
		fileAccept: '.zip',
		regexp: /\.zip$/,
		fileWarning: 'ZIP, пожалуйста!',
		fileWarningSize: 'ZIP, пожалуйста (макс. 50 MB)!',
		maxSize: 50 * 1024 * 1024,
	},
};

@reduxForm({
	form: 'job',
	fields: [
		'firstname',
		'lastname',
		'age',
		'location',
		'file',
		'email',
		'skype',
		'phone',
	],
})
export default class PageJob extends Component {
	static propTypes = {
		handleSubmit: React.PropTypes.func.isRequired,
		jobName: React.PropTypes.string.isRequired,
	}

	handleSubmit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = {};
			let haveErrors = false;

			Object.keys(values).forEach((key) => {
				const value = values[key];

				if (key === 'file') {
					const fileSpec = fileTypes[this.props.jobName];
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

				if (!value) {
					errors[key] = true;
					haveErrors = true;
				}
			});

			if (haveErrors) {
				dispatch(setEmptyFields());
				reject(errors);
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
		return (
			<JobForm
				{...this.props}
				{...fileTypes[this.props.jobName]}
				handleSubmit={handleSubmit}
			/>
		);
	}
}
