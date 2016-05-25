import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOrderForm, setEmptyFields } from 'actions/order';
import Uploader from 'components/uploader';
import Options from 'components/order-options';
import ContactsForm from 'components/contacts-form';
import Link from 'components/link';
import options from 'data/order-options.json';
import * as actions from 'actions/files';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import rEmail from 'regex-email';

const requiredFields = [
	'email',
	'phone',
];

@reduxForm({
	form: 'order',
	fields: [
		'name',
		'email',
		'skype',
		'phone',
		'filesLink',
		'modernBrowsers',
		'oldBrowsers',
		'mobileBrowsers',
		'pagesWidth',
		'addition',
		'files',
	],
	initialValues: {
		modernBrowsers: ['chrome', 'firefox', 'safari', 'opera', 'edge'],
		oldBrowsers: ['safari8', 'ie11'],
		mobileBrowsers: ['mobilesafari', 'mobilesafariold', 'mobilechromeios', 'mobilechromeandroid', 'mobilechromeandroidold'],
		pagesWidth: 'fixed',
		addition: [],
	},
})
@connect((store) => ({
	files: store.files,
}), (dispatch) => ({
	...bindActionCreators(actions, dispatch),
}))
export default class FormOrder extends React.Component {
	static propTypes = {
		error: React.PropTypes.any,
		fields: React.PropTypes.object,
		files: React.PropTypes.array,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	state = {}

	componentWillReceiveProps(props) {
		const { error } = props;

		if (error === 'EMPTY_FIELDS' || error === false) {
			this.setState({ error });
		}
	}

	handleSubmit = (values, dispatch) => {
		const { files } = this.props;

		return new Promise((resolve, reject) => {
			const errors = {};

			requiredFields.forEach((key) => {
				const value = values[key];

				if (!values[key]) {
					errors[key] = true;
				}

				if (key === 'email' && !rEmail.test(value)) {
					errors[key] = true;
				}
			});

			if (!values.filesLink && !files.length) {
				errors.files = 'Прикрепите макеты страниц или укажите ссылку для скачивания';
			}

			if (!files.reduce((p, n) => p && n.filename, true)) {
				errors.files = 'Дождитесь окончания загрузки';
			}

			if (Object.keys(errors).length) {
				dispatch(setEmptyFields());
				reject(errors);
				return;
			}

			dispatch(sendOrderForm({
				...values,
				files,
			}));
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		const { fields } = this.props;
		let { error } = this.state;

		if (error === 'EMPTY_FIELDS' || fields.files.error) {
			error = {
				title: 'Внимание!',
				text: <div>
					{error === 'EMPTY_FIELDS' ? <div>Заполните все обязательные поля формы.</div> : null}
					{fields.files.error ? <div>{fields.files.error}.</div> : null}
				</div>,
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
			<div>
				<Uploader {...this.props} />
				<Options {...this.props} options={options} />

				<ContactsForm
					{...this.props}
					error={error}
					handleSubmit={handleSubmit}
					requiredFields={requiredFields}
				/>
			</div>
		);
	}
}
