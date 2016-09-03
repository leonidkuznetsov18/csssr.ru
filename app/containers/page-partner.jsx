import React from 'react';
import disableScroll from 'utils/disableScroll';

import Projecter from 'components/projecter';

const data = require('data/partners.json');

@disableScroll
export default class PagePartner extends React.Component {
	static propTypes = {
		location: React.PropTypes.object.isRequired,
		history: React.PropTypes.object.isRequired,
		params: React.PropTypes.object.isRequired,
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

	handleClose = () => {
		this.setState({
			active: false,
		});

		if (this.props.location.action === 'PUSH') {
			this.props.history.goBack();
		} else {
			this.props.history.push('/outsource');
		}
	}

	render() {
		const partner = this.props.params.partner;

		return (
			<Projecter
				onClose={this.handleClose}
				{...data[partner]}
				active={this.state.active}
				partner={partner}
			/>
		);
	}
}
