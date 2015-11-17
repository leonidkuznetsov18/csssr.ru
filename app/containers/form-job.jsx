import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions/jobs';

import JobForm from 'components/job-form';

const fileTypes = {
	'pixel-perfectionist': {
		fileAccept: '.zip',
		fileWarning: 'ZIP, пожалуйста!',
	},
	'technical-manager': {
		fileAccept: '.docx',
		fileWarning: 'DOCX, пожалуйста!',
	},
};

@connect((store, props) => ({
	job: store.jobs[props.jobName],
}), (dispatch) => ({
	...bindActionCreators(actions, dispatch),
}))
export default class PageJob extends React.Component {
	static propTypes = {
		jobName: React.PropTypes.string.isRequired,
		job: React.PropTypes.object.isRequired,
	}

	onChangeField = (value, field) => {
		this.props.changeAnswerForm(this.props.job.key, {
			[field]: {
				value,
				showError: false,
			},
		});
	}

	onChangeNumberField = (event, field) => {
		const newValue = event.target.value.replace(/\D/g, '');
		this.onChangeField(newValue, field);
	}

	onChangeFileField = (event) => {
		this.onChangeField(event.target.files[0], 'file');
	}

	onSubmit = (event) => {
		event.preventDefault();

		if (this.props.job.isValid) {
			this.props.sendAnswerForm(this.props.job.key);
		} else {
			this.props.showFormErrors(this.props.job.key);
		}
	}

	render() {
		return (
			<JobForm
				{...this.props}
				{...fileTypes[this.props.jobName]}
				onChangeField={this.onChangeField}
				onChangeNumberField={this.onChangeNumberField}
				onChangeFileField={this.onChangeFileField}
				onSubmit={this.onSubmit}
			/>
		);
	}
}
