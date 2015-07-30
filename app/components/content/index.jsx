import React from 'react';

import './styles.css';

export default class Content extends React.Component {
	static propTypes = {
		children: React.PropTypes.node
	}

	render() {
		return (
			<main className='content'>
				{this.props.children}
			</main>
		)
	}
}
