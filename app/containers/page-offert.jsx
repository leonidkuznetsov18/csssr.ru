import React from 'react';

import Offert from 'components/offert';

export default class PageOffert extends React.Component {
	static propTypes = {
		route: React.PropTypes.object.isRequired,
	}

	render() {
		const { path } = this.props.route;
		const data = require(`data/${path.slice(1)}.json`);

		return (
			<Offert data={data}/>
		);
	}
}
