import React from 'react';

import './styles.css';


export default class Projecter extends React.Component {

	static propTypes = {
		project: React.PropTypes.string.isRequired,
		closeProjecter: React.PropTypes.func,
		children: React.PropTypes.node.isRequired
	}


	render() {
		return (
			<div
				className={`projecter projecter_project_${this.props.project} projecter_state_active`}
				onClick={this.props.closeProjecter}
			>
				<div onClick={(e) => e.stopPropagation()}>
					{this.props.children}
				</div>

			</div>
		);
	}
}
