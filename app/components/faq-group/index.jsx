import React from 'react';
import {Element as ScrollElement} from 'react-scroll';

import './styles.css';

export default class FaqGroup extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.node),
			React.PropTypes.node
		])
	}

	render() {
		return (
			<ScrollElement name='faq' className='faq-group'>
				{this.props.children}
			</ScrollElement>
		);
	}
}
