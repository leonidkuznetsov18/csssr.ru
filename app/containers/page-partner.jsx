import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import Projecter from 'components/projecter';

const data = require('data/partners.json');

@connect(
	state => ({}),
	{pushState}
)
export default class PagePartner extends React.Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		pushState: React.PropTypes.func.isRequired
	}

	componentWillMount() {
		this.setState({
			active: false
		});
	}

	componentDidMount() {
		this.setState({
			active: true
		});
	}

	onClose = () => {
		this.setState({
			active: false
		});

		setTimeout(() => {
			this.props.pushState(null, '/outsource');
		}, 300);
	}

	render() {
		const partner = this.props.params.partner;
		console.log(this.props);
		return (
			<Projecter
				onClose={this.onClose}
				{...data[partner]}
				partner={partner}
				active={this.state.active}
			/>
		);
	}
}
