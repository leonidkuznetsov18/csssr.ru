import React from 'react';
import Hole from 'components/hole';

import './styles.css';

export default class Content extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		hole: React.PropTypes.bool
	}

	render() {
		return (
			<main className='content'>
				{this.props.hole ? <Hole/> : ''}
				{this.props.children}
			</main>
		)
	}
}
