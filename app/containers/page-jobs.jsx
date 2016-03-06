import React from 'react';
import Helmet from 'react-helmet';

import { jobs } from 'data/meta';

export default class PageJobs extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node,
		]),
	}

	render() {
		return (
			<div>
				<Helmet {...jobs} />
				{this.props.children}
			</div>
		);
	}
}
