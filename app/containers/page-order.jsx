import React from 'react';
import Helmet from 'react-helmet';

import { order } from 'data/meta';

export default class PageCompany extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
	}

	render() {
		return (
			<div>
				<Helmet {...order} />
				{this.props.children}
			</div>
		);
	}
}
