import React from 'react';
import { Link } from 'react-router';

import './styles.css';

export default class Button extends React.Component {

	static propTypes = {
		children: React.PropTypes.node
	}


	render() {
		return (
			<Link {...this.props} className='button'>
				<span className='button__inner'>
					{this.props.children}
				</span>
				<span className='button__shadow' />
			</Link>
		);
	}
}
