import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOutsourceForm } from 'actions/outsource';
import ContactsForm from 'components/contacts-form';
import Link from 'components/link';

const requiredFields = [
	'name',
	'email',
	'skype',
	'phone',
];

@reduxForm({
	form: 'outsource',
	fields: [
		'name',
		'email',
		'skype',
		'phone',
	],
})
export default class FormOutsource extends React.Component {
	static propTypes = {
		handleSubmit: React.PropTypes.func.isRequired,
		error: React.PropTypes.any,
	}

	handleSubmit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = {};
			let haveErrors = false;

			Object.keys(values).forEach((key) => {
				if (!values[key]) {
					errors[key] = true;
					haveErrors = true;
				}
			});

			if (haveErrors) {
				reject(errors);
				return;
			}

			dispatch(sendOutsourceForm(values));
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		const responseError = this.props.error;
		const error = responseError ? {
			title: 'Внимание!',
			text: responseError === 'ERROR' ? <span>
				Случилось непредвиденное.
				Пожалуйста, попробуйте отправить форму снова или напишите нам на
				{' '}
				<Link href='mailto:sales@csssr.io'>sales@csssr.io</Link>
			</span> : responseError,
		} : {};

		return (
			<ContactsForm
				{...this.props}
				handleSubmit={handleSubmit}
				requiredFields={requiredFields}
				error={error}
			/>
		);
	}
}
