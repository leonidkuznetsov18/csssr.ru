import React from 'react';
import Helmet from 'react-helmet';

import { outsource } from 'data/meta';

export default class Outsource extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
	}

	render() {
		return (
			<div>
				<Helmet {...outsource} />
				{this.props.children}
			</div>
		);
	}
}
