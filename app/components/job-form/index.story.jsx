import React from 'react';
import JobForm from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { action } from '@kadira/storybook';

const handleSubmit = (event) => {
	event.preventDefault();
	action('submit');
};
const generateFields = (fields) => fields.reduce((acc, field) => ({
	...acc,
	[field]: {
		invalid: true,
		error: 'ZIP, пожалуйста!',
	},
}), {});
const fileType = {
	fileAccept: '.zip',
	regexp: /\.zip$/,
	fileWarning: 'ZIP, пожалуйста!',
	fileWarningSize: 'ZIP, пожалуйста (макс. 16 MB)!',
	maxSize: 16 * 1024 * 1024,
};

storiesOf('JobForm')
	.add('default', () => (
		<JobForm
			{...fileType}
			handleSubmit={handleSubmit}
		/>
	))
	.add('invalid', () => (
		<JobForm
			{...fileType}
			fields={generateFields([
				'firstname',
				'lastname',
				'age',
				'location',
				'file',
				'email',
				'skype',
				'phone',
			])}
			handleSubmit={handleSubmit}
		/>
	))
	.add('submitting', () => (
		<JobForm
			{...fileType}
			handleSubmit={handleSubmit}
			submitting
		/>
	))
	.add('error-500', () => (
		<JobForm
			{...fileType}
			error='ERROR'
			handleSubmit={handleSubmit}
		/>
	))
	.add('error-empty', () => (
		<JobForm
			{...fileType}
			error='EMPTY_FIELDS'
			handleSubmit={handleSubmit}
		/>
	));
