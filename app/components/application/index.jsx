import React, { PropTypes } from 'react';
import Header from 'components/header';

import './styles.css';

export default class Application extends React.Component {
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (
			<div className='application'>
				<div className='application__inner'>
					<Header/>
					{this.props.children}
				</div>
			</div>
		);
	}
}
