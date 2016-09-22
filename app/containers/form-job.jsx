import React, { Component, PropTypes as pt } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { sendAnswerForm, setEmptyFields } from 'actions/jobs';
import JobForm from 'components/job-form';
import rEmail from 'regex-email';
import pick from 'lodash.pick';

const mapQuest = ({ title, text, link }) => ({
	title,
	text,
	link,
});

const mapProps = (state, { options: { hasFile } }) => {
	const fields = [
		'firstname',
		'lastname',
		'age',
		'location',
		'resume',
		'portfolio',
		'email',
		'skype',
		'phone',
		'comment',
	];

	if (hasFile) {
		fields.push('file');
	}

	return {
		fields,
	};
};

@connect(mapProps)
@reduxForm({
	form: 'job',
})
export default class PageJob extends Component {
	static propTypes = {
		component: pt.oneOfType([
			pt.element,
			pt.func,
		]),
		handleSubmit: pt.func.isRequired,
		jobName: pt.string,
		options: pt.object,
		quests: pt.array,
		vacancy: pt.object,
	}

	static defaultProps = {
		component: JobForm,
		options: {},
		vacancy: {},
		quests: [],
	}

	getFileType = (vacancy) => {
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

	createSubmitHandler = () => this.props.handleSubmit((values, dispatch) => {
		return new Promise((resolve, reject) => {
			const {
				hasResume,
				hasPortfolio,
				hasComment,
				hasFile,
			} = this.props.options;
			const optionalFields = {
				resume: hasResume,
				portfolio: hasPortfolio,
				comment: hasComment,
			};
			const errors = {};
			let haveErrors = false;

			const fields = Object.keys(values).filter((item) =>
				typeof optionalFields[item] === 'boolean' ? optionalFields[item] : true
			);

			fields
				.filter((item) => item !== 'comment')
				.forEach((key) => {
					const value = values[key];

					if (key === 'file') {
						if (!hasFile) {
							return;
						}

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

			const formData = {
				...pick(values, fields),
				vacancy: this.props.jobName,
			};


			if (!hasFile) {
				formData.quests = this.props.quests.map(mapQuest);
			}

			dispatch(sendAnswerForm(formData));
		});
	})

	render() {
		const {
			component: Form,
			jobName,
			options: {
				hasFile,
			},

		} = this.props;

		let formProps = {};

		if (hasFile) {
			formProps = this.getFileType(this.props.vacancy);
		}

		return (
			<Form
				{...this.props}
				{...formProps}
				handleSubmit={this.createSubmitHandler()}
				jobName={jobName}
				options={this.props.options}
			/>
		);
	}
}
