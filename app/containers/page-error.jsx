import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Error from 'components/error';

export default class PageError extends React.Component {
	static propTypes = {
		location: React.PropTypes.object.isRequired,
	}

	render() {
		let errorCode = parseInt(this.props.location.pathname.slice(1), 10);
		errorCode = [403, 404, 500, 502].indexOf(errorCode) === -1 ? 404 : errorCode;

		return (
			<Content>
				<Helmet title={`CSSSR - ${errorCode}`} />
				<Error number={errorCode} />
			</Content>
		);
	}
}
