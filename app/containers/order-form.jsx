import React, {PropTypes} from 'react';
import * as actionCreators from 'actions/order';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeOption} from 'actions/order';
import Uploader from 'components/order-uploader';
import Options from 'components/order-options';
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
		// TODO: send form to server if data is valid
		console.log('submit order form');
	}


	render() {
		const actions = bindActionCreators(actionCreators, this.props.dispatch);

		return (
			<form
				action='order/form/submit/path'
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>
				<Uploader {...actions} />
				<Options {...actions} options={this.props.form.options} />
				<Contacts {...actions} contacts={this.props.form.contacts} />
			</form>
		);
	}
}
