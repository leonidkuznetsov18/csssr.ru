import React from 'react';
import cx from 'classnames';
import ProjectSidebar from 'components/project-sidebar';

import './styles.css';

export default function Project({project, onToggle, collapsed, children}) {
	const blockClass = cx({
		project: true,
		project_full: collapsed
	});

	return (
		<div className={blockClass}>
			<div className='project__open'
				onClick={() => onToggle(false)}
				role='link'
			/>

			<div className='project__sidebar'>
				<ProjectSidebar
					project={project}
					onToggle={onToggle}
				/>
			</div>

			<div className='project__page'>
				{children}
			</div>
		</div>
	);
}

Project.propTypes = {
	project: React.PropTypes.object.isRequired,
	onToggle: React.PropTypes.func.isRequired,
	children: React.PropTypes.element,
	collapsed: React.PropTypes.bool,
};
