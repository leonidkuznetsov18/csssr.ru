import React from 'react';
import cx from 'classnames';
import ProjectSidebar from 'components/project-sidebar';

import './styles.css';

const projects = require('data/portfolio.json').list;

export default class Project extends React.Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		children: React.PropTypes.element
	}

	componentWillMount() {
		projects.forEach((project) => {
			if (project.view !== this.props.params.project) {
				return;
			}

			this.setState({
				project
			});
		});
	}

	onSidebarToggle = (collapsed) => {
		this.setState({
			collapsed: collapsed
		});
	}

	render() {
		const blockClass = cx({
			project: true,
			project_full: this.state.collapsed
		});

		return (
			<div className={blockClass}>
				<div className='project__open'
					onClick={() => this.onSidebarToggle(false)}
					role='link'
				/>

				<div className='project__sidebar'>
					<ProjectSidebar
						project={this.state.project}
						onToggle={this.onSidebarToggle}
					/>
				</div>

				<div className='project__page'>
					{this.props.children}
				</div>
			</div>
		);
	}
}
