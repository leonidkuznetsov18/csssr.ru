import React, { PropTypes } from 'react';

import PopupVersion from 'components/popup-version';

const timeline = require('data/timeline.yml');

const goToPageCreator = history => path => e => {
	history.pushState(null, path);
};

export default class VersionPopup extends React.Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		routeParams: PropTypes.object.isRequired
	}

	render() {
		const popupData = url => {
			let target;
			timeline.forEach(event => {
				if (event.data) {
					event.data.forEach(version => {
						if (version.url === url) {
							return target = version;
						}
					});
				}
			});
			return target;
		}(this.props.routeParams.version);

		return (
			<PopupVersion
				{...popupData}
				goToPage={goToPageCreator(this.props.history)}
			/>
		);
	}
};
