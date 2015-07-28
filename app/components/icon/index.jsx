import React, { PropTypes } from 'react';
import './styles.css';

export default class Icon extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.string
	}

	render() {
		const icon = require(`images/${this.props.icon}.svg`);
		return (
			<div {...this.props}
				className='icon'
				dangerouslySetInnerHTML={{__html: icon}}
			/>
		);
	}
}
