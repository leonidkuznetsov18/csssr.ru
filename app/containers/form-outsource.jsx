import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOutsourceForm } from 'actions/outsource';
import ContactsForm from 'components/contacts-form';

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

		return (
			<ContactsForm
				{...this.props}
				handleSubmit={handleSubmit}
			/>
		);
	}
}
