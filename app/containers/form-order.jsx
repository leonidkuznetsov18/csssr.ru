import React, {PropTypes} from 'react';
import * as actions from 'actions/order';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Uploader from 'components/uploader';
import Options from 'components/order-options';
import FormValidationWindow from 'components/form-validation-window';
import Contacts from 'components/contacts-form';

@connect((store) => ({
	...store.order,
}), (dispatch) => ({
	...bindActionCreators(actions, dispatch),
}))
export default class OrderForm extends React.Component {
	static propTypes = {
		form: PropTypes.object.isRequired,
		isValid: React.PropTypes.bool,
		sendOrderForm: React.PropTypes.func.isRequired,
		showErrors: React.PropTypes.func.isRequired,
		changeContacts: React.PropTypes.func.isRequired,
	}

	onChangeField = (value, field) => {
		this.props.changeContacts({
			[field]: {
				value,
				showError: false,
			},
		});
	}

	onSubmit = (event) => {
		event.preventDefault();

		if (this.props.form.isValid) {
			this.props.sendOrderForm();
		} else {
			this.props.showErrors();
		}
	}

	render() {
		const {
			contacts,
			files,
			filesLink,
			showErrorWindow,
		} = this.props.form;

		const error = () => {
			if (showErrorWindow) {
				if (!files.length && !filesLink) {
					return {
						show: true,
						text: 'Прикрепите макеты страниц или укажите ссылку для скачивания',
					};
				}
				if (!files.reduce((p, n) => p && n.filename, true)) {
					return {
						show: true,
						text: 'Дождитесь окончания загрузки',
					};
				}

				const isErrorInContacts = () => {
					for (const key in contacts) if (contacts.hasOwnProperty(key)) {
						if (contacts[key].showError && !contacts[key].isValid()) {
							return true;
						}
					}
					return false;
				}();

				return {
					show: isErrorInContacts,
				};
			}

			return {show: false};
		}();

		return (
			<form
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>
				<Uploader {...this.props} {...{files, filesLink}} />
				<Options {...this.props} options={this.props.form.options} />

				{error.show &&
					<FormValidationWindow text={error.text} />
				}

				<div style={{width: 420}}>
					<Contacts
						{...this.props}
						form={this.props.form.contacts}
						onChangeField={this.onChangeField}
					/>
				</div>
			</form>
		);
	}
}
