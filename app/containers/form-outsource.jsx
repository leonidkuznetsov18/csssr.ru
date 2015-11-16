import React from 'react';
import * as actionCreators from 'actions/outsource';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Contacts from 'components/contacts-form';

@connect((store) => ({
	form: store.outsource.form,
}))
export default class FormOutsource extends React.Component {
	static propTypes = {
		form: React.PropTypes.object.isRequired,
		dispatch: React.PropTypes.func.isRequired,
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(actionCreators.showErrors());
		this.props.dispatch(actionCreators.sendForm());
	}

	render() {
		const actions = bindActionCreators(actionCreators, this.props.dispatch);

		return (
			<form
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>
				<Contacts {...actions} contacts={this.props.form} />
			</form>
		);
	}
}
