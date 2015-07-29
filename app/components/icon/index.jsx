import React, { PropTypes } from 'react';

export default class Icon extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.string
	}

	render() {
		const icon = require(`images/icons/${this.props.icon}.svg`);
		return (
			<div {...this.props}
				dangerouslySetInnerHTML={{__html: icon}}
			/>
		);
	}
}
