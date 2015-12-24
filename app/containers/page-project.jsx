import React from 'react';

import Project from 'components/project';

const projects = require('data/projects.json');

export default class PageProject extends React.Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		children: React.PropTypes.element,
	}

	onToggle = (collapsed) => {
		this.setState({
			collapsed,
		});
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

		document.body.style.overflow = 'hidden';
	}

	componentWillUnount() {
		document.body.style.overflow = null;
	}

	render() {
		return (
			<Project {...this.state} onToggle={this.onToggle}>
				{this.props.children}
			</Project>
		);
	}
}
