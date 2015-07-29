import React, { PropTypes } from 'react';
import './styles.css';

export default class Icon extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.string
	}

	render() {
		const icon = require(`images/icons/${this.props.icon}.svg`);
		const className = 'icon ' + this.props.className;
		return (
			<div {...this.props}
				className={className}
				dangerouslySetInnerHTML={{__html: icon}}
			/>
		);
	}
}
