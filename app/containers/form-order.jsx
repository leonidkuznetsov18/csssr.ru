import React from 'react';
import { reduxForm } from 'redux-form';
import { sendOrderForm } from 'actions/order';
import Uploader from 'components/uploader';
import OrderOptions from 'components/order-options';
import ContactsForm from 'components/contacts-form';
import options from 'data/order-options.json';
import * as actions from 'actions/files';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import validator, { containErrors } from 'utils/validator';
import getError from 'utils/getError';

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
		modernBrowsers: ['chrome', 'firefox', 'safari', 'opera', 'edge', 'ie11'],
		oldBrowsers: ['safari8'],
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

	handleSubmit = (values, dispatch) => {
		const { files } = this.props;

		return new Promise((resolve, reject) => {
			const errors = validator({
				...values,
				files,
			}, {
				files: {
					custom: () => {
						if (!values.filesLink && !files.length) {
							return 'Прикрепите макеты страниц или укажите ссылку для скачивания';
						}

						if (!files.reduce((p, n) => p && n.filename, true)) {
							return 'Дождитесь окончания загрузки';
						}
					},
				},
			});


			if (containErrors(errors)) {
				reject({
					...errors,
					_error: 'EMPTY_FIELDS',
				});

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
		const { fields, error } = this.props;

		return (
			<div>
				<Uploader {...this.props} />
				<OrderOptions {...this.props} options={options} />

				<ContactsForm
					{...this.props}
					error={getError(error, 'order', fields.files.error)}
					handleSubmit={handleSubmit}
				/>
			</div>
		);
	}
}
