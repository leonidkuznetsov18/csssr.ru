import React, { PropTypes } from 'react';

export default class Head extends React.Component {
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (
			<head>
				<meta charSet='utf-8'/>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui' />
				{this.props.children}
			</head>
		);
	}
}
