import React from 'react';
import disableScroll from 'helpers/disableScroll';

import Projecter from 'components/projecter';

const data = require('data/partners.json');

@disableScroll
export default class PagePartner extends React.Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		history: React.PropTypes.object.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	componentDidMount() {
		this.setState({
			active: true,
		});
	}

	onClose = () => {
		this.setState({
			active: false,
		});

		setTimeout(() => {
			this.props.history.pushState(null, '/outsource');
		}, 300);
	}

	render() {
		const partner = this.props.params.partner;
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
