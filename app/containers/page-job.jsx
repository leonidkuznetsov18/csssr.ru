import React from 'react';
import Helmet from 'react-helmet';

import { job } from 'data/meta';

export default class PageJob extends React.Component {
	static propTypes = {
		routeParams: React.PropTypes.object,
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node,
		]),
	}

	render() {
		const page = this.props.routeParams.jobName;

		return (
			<div>
				<Helmet {...job[page]} />
				{this.props.children}
			</div>
		);
	}
}
