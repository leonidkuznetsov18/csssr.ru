import React, { PropTypes } from 'react';
import PopupVersion from 'components/popup-version';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const timeline = require('data/timeline.yml');

@connect(
	state => ({}),
	{pushState}
)
export default class VersionPopup extends React.Component {

	static propTypes = {
		routeParams: PropTypes.object.isRequired,
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
			this.props.pushState(null, '/timeline');
		}, 300);
	}

	render() {
		const popupData = url => {
			let target;
			timeline.forEach(event => {
				if (event.version) {
					if (event.version.number.toString() === url) {
						target = event.version;
						return;
					}
				}
			});
			return target;
		}(this.props.routeParams.version);

		return (
			<PopupVersion
				onClose={this.onClose}
				active={this.state.active}
				screenshot={popupData.url}
			/>
		);
	}
};
