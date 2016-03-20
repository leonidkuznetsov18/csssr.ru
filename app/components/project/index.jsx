import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import ProjectSidebar from 'components/project-sidebar';

import styles from './styles.css';

function Project({ project, onToggle, collapsed, children }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_full]: collapsed,
	});

	return (
		<div className={blockClass}>
			<div className={styles.open}
				onClick={() => onToggle(false)}
				role='link'
			/>

			<div className={styles.sidebar}>
				<ProjectSidebar
					project={project}
					onToggle={onToggle}
				/>
			</div>

			<div className={styles.page}>
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

export default withStyles(Project, styles);
