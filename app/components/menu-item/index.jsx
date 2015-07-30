import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './styles.css';

export default class MenuItem extends React.Component {
	static propTypes = {
		href: PropTypes.string,
		text: PropTypes.string
	}

	render() {
		return (
			<Link
				className='menu-item'
				activeClassName='menu-item_state_active'
				to={this.props.href}
			>
				{this.props.text}
				<span className='menu-item__arrow'/>
			</Link>
		);
	}
}
