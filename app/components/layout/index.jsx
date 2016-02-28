import React from 'react';

import Head from 'components/head';

export default class Layout extends React.Component {
	static propTypes = {
		style: React.PropTypes.string,
		content: React.PropTypes.string,
		script: React.PropTypes.string,
		meta: React.PropTypes.object,
	}

	render() {
		return (
			<html>
				<Head meta={this.props.meta}>
					<link rel='stylesheet' href={this.props.style} />
				</Head>
				<body>
					<div id='content' dangerouslySetInnerHTML={{
						__html: this.props.content,
					}} />
					<script src={this.props.script} async defer/>
				</body>
			</html>
		);
	}
}
