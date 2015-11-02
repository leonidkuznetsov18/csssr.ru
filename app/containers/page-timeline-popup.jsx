import React, { PropTypes } from 'react';

import TimelinePopup from 'components/timeline-popup';

const timeline = require('data/timeline.yml');



export default class PageTimelinePopup extends React.Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		routeParams: PropTypes.object.isRequired
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
				{...popupData}
			/>
		);
	}
};
