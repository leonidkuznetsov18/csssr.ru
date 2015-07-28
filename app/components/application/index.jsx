import React, { PropTypes } from 'react';
import './styles.css';

export default class Application extends React.Component {
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (
			<div className='application'>
				{this.props.children}
			</div>
		);
	}
}
