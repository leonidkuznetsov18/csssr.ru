import React, {PropTypes} from 'react';
import * as actionCreators from 'actions/order';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeOption} from 'actions/order';
import Uploader from 'components/order-uploader';
import Options from 'components/order-options';
import ValidationWindow from 'components/order-form-validation-window';
import Contacts from 'components/order-contacts';


@connect(store => ({
	form: store.order.form
}))
export default class OrderForm extends React.Component {

	static propTypes = {
		form: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}


	onSubmit = e => {
		e.preventDefault();
		this.props.dispatch(actionCreators.showErrors());
		this.props.dispatch(actionCreators.sendOrderForm());
		// TODO: send form to server if data is valid
		console.log('submit order form');
	}


	render() {
		const actions = bindActionCreators(actionCreators, this.props.dispatch);
		const {options, contacts, files, filesLink, showErrorWindow} = this.props.form;

		const error = () => {
			if (showErrorWindow) {
				if (!files.length && !filesLink) {
					return {
						show: true,
						text: 'Прикрепите макеты страниц или укажите ссылку для скачивания'
					};
				}
				if (!files.reduce((p, n) => p && n.path, true)) {
					return {
						show: true,
						text: 'Дождитесь окончания загрузки'
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
					show: isErrorInContacts
				}
			}

			return {show: false};
		}();

		return (
			<form
				action='order/form/submit/path'
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>
				<Uploader {...actions} {...{files, filesLink}} />
				<Options {...actions} options={this.props.form.options} />
				{error.show ? <ValidationWindow text={error.text} /> : null}
				<Contacts {...actions} contacts={this.props.form.contacts} />
			</form>
		);
	}
}
