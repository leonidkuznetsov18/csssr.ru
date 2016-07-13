import React from 'react';
import disableScroll from 'utils/disableScroll';

import Project from 'components/project';

const projects = require('data/projects.json');

@disableScroll
export default class PageProject extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		params: React.PropTypes.object.isRequired,
	}

	componentWillMount() {
		projects.forEach((project) => {
			if (project.view !== this.props.params.project) {
				return;
			}

			this.setState({
				project,
			});
		});
	}

	handleToggle = (collapsed) => {
		this.setState({
			collapsed,
		});
	}

	render() {
		return (
			<Project {...this.state} onToggle={this.handleToggle}>
				{this.props.children}
			</Project>
		);
	}
}
