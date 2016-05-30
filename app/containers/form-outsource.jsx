import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOutsourceForm, setEmptyFields } from 'actions/outsource';
import ContactsForm from 'components/contacts-form';
import Link from 'components/link';
import rEmail from 'regex-email';

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

	state = {}

	componentWillReceiveProps(props) {
		const { error } = props;

		if (error || error === false) {
			this.setState({ error });
		}
	}

	handleSubmit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			const errors = {};
			let haveErrors = false;

			Object.keys(values).forEach((key) => {
				const value = values[key];

				if (!values[key]) {
					errors[key] = true;
					haveErrors = true;
				}

				if (key === 'email' && !rEmail.test(value)) {
					errors[key] = true;
					haveErrors = true;
				}
			});

			if (haveErrors) {
				dispatch(setEmptyFields());
				reject(errors);
				return;
			}

			dispatch(sendOutsourceForm(values));
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		let { error } = this.state;

		if (error === 'EMPTY_FIELDS') {
			error = {
				title: 'Внимание!',
				text: 'Заполните все обязательные поля формы.',
			};
		} else if (error === 'ERROR') {
			error = {
				title: 'Внимание!',
				text: <span>
					Случилось непредвиденное.
					Пожалуйста, попробуйте отправить форму снова или напишите нам на
					{' '}
					<Link href='mailto:sales@csssr.io'>sales@csssr.io</Link>
				</span>,
			};
		}

		return (
			<ContactsForm
				{...this.props}
				error={error}
				handleSubmit={handleSubmit}
				requiredFields={requiredFields}
			/>
		);
	}
}
