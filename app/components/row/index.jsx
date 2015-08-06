import React from 'react';

import './styles.css';

export default class Row extends React.Component {
	static propTypes = {
		children: React.PropTypes.node
	}

	render() {
		return (
			<div className='row'>
				{this.props.children}
			</div>
		);
	}
}
