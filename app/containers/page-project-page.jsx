import React from 'react';

import ProjectFrame from 'components/project-frame';

const projects = require('data/projects.json');

export default class PageProjectPage extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		params: React.PropTypes.object.isRequired,
	}

	componentWillMount() {
		this.setState({
			loaded: false,
		});

		projects.forEach((project) => {
			if (project.view !== this.props.params.project) {
				return;
			}

			this.setState({
				project,
			});
		});
	}

	componentWillReceiveProps() {
		this.setState({
			loaded: false,
		});
	}

	handleLoad = () => {
		this.setState({
			loaded: true,
		});
	}

	render() {
		const { params } = this.props;
		const { project } = this.state;
		const projectUrl = project.url || `http://portfolio.csssr.ru/${project.view}/`;
		const url = `${projectUrl}${params.page}.html`;

		return (
			<ProjectFrame
				loaded={this.state.loaded}
				onLoad={this.handleLoad}
				url={url}
			/>
		);
	}
}
