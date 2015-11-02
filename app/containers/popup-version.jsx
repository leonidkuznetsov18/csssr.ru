import React, { PropTypes } from 'react';
import PopupVersion from 'components/popup-version';

const timeline = require('data/timeline.yml');

export default class VersionPopup extends React.Component {

	static propTypes = {
		routeParams: PropTypes.object.isRequired
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
				screenshot={popupData.url}
			/>
		);
	}
};
