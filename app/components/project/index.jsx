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
	const closeSidebar = () => onToggle(false);

	return (
		<div className={blockClass}>
			<div className={styles.open}
				onClick={closeSidebar}
				role='link'
			/>

			<div className={styles.sidebar}>
				<ProjectSidebar
					onToggle={onToggle}
					project={project}
				/>
			</div>

			<div className={styles.page}>
				{children}
			</div>
		</div>
	);
}

Project.propTypes = {
	children: React.PropTypes.element,
	collapsed: React.PropTypes.bool,
	onToggle: React.PropTypes.func.isRequired,
	project: React.PropTypes.object.isRequired,
};

export default withStyles(Project, styles);
