import React, {PropTypes} from 'react';
import * as actionCreators from 'actions/outsource';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Text from 'components/text';
import Contacts from 'components/contacts-form';

@connect(store => ({
	form: store.outsource.form
}))
export default class FormOutsource extends React.Component {
	static propTypes = {
		form: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	onSubmit = e => {
		e.preventDefault();
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
