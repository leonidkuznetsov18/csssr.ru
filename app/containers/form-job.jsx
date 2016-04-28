import React from 'react';
import { reduxForm } from 'redux-form';
import { sendAnswerForm } from 'actions/jobs';
import JobForm from 'components/job-form';

const fileTypes = {
	'pixel-perfectionist': {
		fileAccept: '.zip',
		regexp: /\.zip$/,
		fileWarning: 'ZIP, пожалуйста!',
	},
	'technical-manager': {
		fileAccept: '.docx',
		regexp: /\.docx$/,
		fileWarning: 'DOCX, пожалуйста!',
	},
	'one-site-designer': {
		fileAccept: '.zip',
		regexp: /\.zip$/,
		fileWarning: 'ZIP, пожалуйста!',
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
export default class PageJob extends React.Component {
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
					const file = fileTypes[this.props.jobName];

					if (!value || !file.regexp.test(value[0].name)) {
						errors[key] = fileTypes[this.props.jobName].fileWarning;
						haveErrors = true;
					}

					return;
				}

				if (!value) {
					errors[key] = true;
					haveErrors = true;
				}
			});

			if (haveErrors) {
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
