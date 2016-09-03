import React from 'react';
import ContactsForm from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { action } from '@kadira/storybook';
import Link from 'components/link';

const generateFields = (fields) => fields.reduce((acc, field) => ({
	...acc,
	[field]: {
		invalid: true,
		error: 'ZIP, пожалуйста!',
	},
}), {});

storiesOf('ContactsForm')
	.add('default', () => (
		<ContactsForm
			handleSubmit={action('submit form')}
		/>
	))
	.add('invalid', () => (
		<ContactsForm
			fields={generateFields([
				'name',
				'email',
				'skype',
				'phone',
			])}
			handleSubmit={action('submit form')}
		/>
	))
	.add('submitting', () => (
		<ContactsForm
			handleSubmit={action('submit form')}
			submitting
		/>
	))
	.add('error', () => (
		<ContactsForm
			error={{
				title: 'Внимание!',
				text: <span>
					Случилось непредвиденное.
					Пожалуйста, попробуйте отправить форму снова или напишите нам на
					{' '}
					<Link href='mailto:sales@csssr.io'>sales@csssr.io</Link>
				</span>,
			}}
			handleSubmit={action('submit form')}
		/>
	));
