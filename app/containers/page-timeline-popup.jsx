import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import TimelinePopup from 'components/timeline-popup';


const timeline = require('data/timeline.yml');

@connect(
	state => ({}),
	{pushState}
)
export default class PageTimelinePopup extends React.Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
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
			this.props.history.pushState(null, '/timeline');
		}, 300);
	}

	render() {
		const popupData = url => {
			let target;
			timeline.forEach(event => {
				if (event.newstaff) {
					event.newstaff.forEach(person => {
						if (person.url === url) {
							return target = person;
						}
					});
				}
			});
			return target;
		}(this.props.routeParams.person);

		return (
			<TimelinePopup
				onClose={this.onClose}
				active={this.state.active}
				{...popupData}
			/>
		);
	}
};
