import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOutsourceForm } from 'actions/outsource';
import ContactsForm from 'components/contacts-form';

import validator, { containErrors } from 'utils/validator';
import getError from 'utils/getError';

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
		error: React.PropTypes.any,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	handleSubmit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = validator(values);
			const haveErrors = containErrors(errors);

			if (haveErrors) {
				reject({
					...errors,
					_error: 'EMPTY_FIELDS',
				});

				return;
			}

			dispatch(sendOutsourceForm(values));
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		const { error } = this.props;

		return (
			<ContactsForm
				{...this.props}
				error={getError(error, 'outsource')}
				handleSubmit={handleSubmit}
				requiredFields={requiredFields}
			/>
		);
	}
}
