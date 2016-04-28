import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import Text from 'components/text';

import styles from './styles.css';

function ProjectSidebar({ project, onToggle }) {
	const closeSidebar = () => onToggle(true);

	return (
		<div className={styles.root}>
			<span
				className={styles.close}
				onClick={closeSidebar}
				rel='link'
			/>

			<h1 className={styles.title}>
				{project.name}
			</h1>

			{project.pages.map((page, index) => (
				<Text key={index} size='xs'>
					<Link
						activeClassName={styles.link_active}
						className={styles.link}
						to={`/portfolio/${project.view}/${page.page}`}
					>
						{page.name}
					</Link>
				</Text>
			))}
		</div>
	);
}

ProjectSidebar.propTypes = {
	onToggle: React.PropTypes.func.isRequired,
	project: React.PropTypes.object.isRequired,
};

export default withStyles(ProjectSidebar, styles);
