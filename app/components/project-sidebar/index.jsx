import React from 'react';
import { Link } from 'react-router';
import Text from 'components/text';

import styles from './styles.css';

export default function ProjectSidebar({ project, onToggle }) {
	return (
		<div className={styles.root}>
			<span
				className={styles.close}
				rel='link'
				onClick={() => onToggle(true)}
			/>

			<h1 className={styles.title}>
				{project.name}
			</h1>

			{project.pages.map((page, index) => (
				<Text size='xs' key={index}>
					<Link
						className={styles.link}
						activeClassName={styles.link_active}
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
	project: React.PropTypes.object.isRequired,
	onToggle: React.PropTypes.func.isRequired,
};
