import React from 'react';
import * as actions from 'actions/outsource';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Contacts from 'components/contacts-form';

@connect((store) => ({
	...store.outsource,
}), (dispatch) => ({
	...bindActionCreators(actions, dispatch),
}))
export default class FormOutsource extends React.Component {
	static propTypes = {
		form: React.PropTypes.object.isRequired,
		sendForm: React.PropTypes.func.isRequired,
		showErrors: React.PropTypes.func.isRequired,
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

		if (this.props.isValid) {
			console.log('send');
			this.props.sendForm();
		} else {
			console.log('errors');
			this.props.showErrors();
		}
	}

	render() {
		console.log(this.props);

		return (
			<form
				autoComplete='off'
				onSubmit={this.onSubmit}
			>
				<Contacts
					{...this.props}
					form={this.props.form}
					onChangeField={this.onChangeField}
				/>
			</form>
		);
	}
}
