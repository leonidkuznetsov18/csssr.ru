import React, {PropTypes} from 'react';

import './styles.css';


export default class JobsWrapper extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render() {
		return (
			<div>
				<span>JobWrapper</span>
				{this.props.children}
			</div>
		);
	}
}
