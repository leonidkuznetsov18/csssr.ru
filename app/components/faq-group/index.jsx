import React from 'react';

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
			<div className='faq-group'>
				{this.props.children}
			</div>
		);
	}
}
