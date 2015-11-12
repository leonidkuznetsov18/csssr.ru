import React from 'react';

import Content from 'components/content';
import Error from 'components/error';

export default class PageError extends React.Component {
	static propTypes = {
		location: React.PropTypes.object.isRequired
	}

	render() {
		let error = parseInt(this.props.location.pathname.slice(1));
		error = [403, 404, 500, 502].indexOf(error) === -1 ? 404 : error;

		return (
			<Content>
				<Error number={error}/>
			</Content>
		);
	}
};
