import React from 'react';
import disableScroll from 'helpers/disableScroll';
import TimelinePopup from 'components/timeline-popup';
import PopupVersion from 'components/popup-version';

const timeline = require('data/timeline.json');

@disableScroll
export default class PageTimelinePopup extends React.Component {
	static propTypes = {
		history: React.PropTypes.object.isRequired,
		routeParams: React.PropTypes.object.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				active: true,
			});
		}, 0);

		window.addEventListener('keyup', this.onKeyUp);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.onKeyUp);
	}

	onKeyUp = (event) => {
		if (event.keyCode !== 27) {
			return;
		}

		event.preventDefault();
		this.onClose();
	}

	onClose = () => {
		this.setState({
			active: false,
		});

		setTimeout(() => {
			this.props.history.push('/timeline');
		}, 300);
	}

	render() {
		if (this.props.routeParams.version) {
			const popupData = ((url) => {
				let target;
				timeline.forEach((event) => {
					if (event.version) {
						if (event.version.number.toString() === url) {
							target = event.version;
							return;
						}
					}
				});
				return target;
			})(this.props.routeParams.version);

			return (
				<PopupVersion
					onClose={this.onClose}
					active={this.state.active}
					screenshot={popupData.url}
				/>
			);
		}

		const popupData = ((url) => {
			let target;
			timeline.forEach((event) => {
				if (event.newstaff) {
					event.newstaff.forEach((person) => {
						if (person.avatar === url) {
							target = person;
							return;
						}
					});
				}
			});
			return target;
		})(this.props.routeParams.person);

		return (
			<TimelinePopup
				onClose={this.onClose}
				active={this.state.active}
				{...popupData}
			/>
		);
	}
}
