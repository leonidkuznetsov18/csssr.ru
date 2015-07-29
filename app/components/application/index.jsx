import React, { PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import './styles.css';

export default class Application extends React.Component {
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (
			<div className='application'>
				<Header/>
				<div className='application__inner'>
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}
