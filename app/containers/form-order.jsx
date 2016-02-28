import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOrderForm } from 'actions/order';
import Uploader from 'components/uploader';
import Options from 'components/order-options';
import FormValidationWindow from 'components/form-validation-window';
import ContactsForm from 'components/contacts-form';
import options from 'data/order-options.json';
import * as actions from 'actions/files';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
		'mobile',
		'pagesWidth',
		'addition',
		'files',
	],
	initialValues: {
		modernBrowsers: ['chrome', 'firefox', 'safari', 'opera', 'edge'],
		oldBrowsers: ['safari8', 'ie11'],
		mobile: ['mobilesafari', 'mobilesafariold', 'mobilechromeios', 'mobilechromeandroid', 'mobilechromeandroidold'],
		pagesWidth: 'static',
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
		handleSubmit: React.PropTypes.func.isRequired,
		files: React.PropTypes.array,
		fields: React.PropTypes.object,
	}

	handleSubmit = (values, dispatch) => {
		const { files } = this.props;

		return new Promise((resolve, reject) => {
			const errors = {};

			['email', 'phone'].forEach((key) => {
				if (!values[key]) {
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
				reject(errors);
				return;
			}

			dispatch(sendOrderForm({
				...values,
				files,
			}));

			resolve();
		});
	}

	render() {
		const handleSubmit = this.props.handleSubmit(this.handleSubmit);
		const { fields } = this.props;
		const error = fields.files.error;

		return (
			<div>
				<Uploader {...this.props} />
				<Options {...this.props} options={options} />

				{error &&
					<FormValidationWindow text={error} />
				}

				<ContactsForm
					{...this.props}
					handleSubmit={handleSubmit}
				/>
			</div>
		);
	}
}
