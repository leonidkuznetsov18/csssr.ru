import React from 'react';
import { Link } from 'react-router';
import Text from 'components/text';

import './styles.css';

export default class ProjectSidebar extends React.Component {
	static propTypes = {
		project: React.PropTypes.object.isRequired,
		onToggle: React.PropTypes.func.isRequired
	}

	render() {
		const { project } = this.props;

		return (
			<div className='project-sidebar'>
				<span
					className='project-sidebar__close'
					rel='link'
					onClick={() => this.props.onToggle(true)}
				/>

				<h1 className='project-sidebar__title'>
					{project.name}
				</h1>

				<ul>
					{project.pages.map((page, index) => (
						<li key={index}>
							<Text size='xs'>
								<Link className='project-sidebar__link'
									activeClassName='project-sidebar__link_active'
									to={`/portfolio/${project.view}/${page.page}`}>

									{page.name}
								</Link>
							</Text>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
