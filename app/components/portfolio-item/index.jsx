import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Text from 'components/text';

import styles from './styles.css';

function PortfolioItem({ project }) {
	let work = project.name;

	if (project.view && project.pages) {
		work = (
			<a
				href={`/portfolio/${project.view}/${project.pages[0].page}`}
				target='_blank'
			>
				{project.name}
			</a>
		);
	} else if (project.url || project.view) {
		const link = project.url || 'http://portfolio.csssr.ru/' + project.view + '/';

		work = (
			<a href={link} target='_blank'>
				{project.name}
			</a>
		);
	}

	return (
		<li className={styles.root}>
			{project.logo &&
				<div className={styles.logo}>
					<img
						alt={project.name}
						className={styles.image}
						height={project.logo.height}
						src={require(`../../images/portfolio/${project.logo.url}`)}
						width={project.logo.width}
					/>
				</div>
			}

			<Text indent={false} size='m'>
				{work}
			</Text>

			{project.featuring &&
				<Text indent={false} size='xxs'>
					{project.featuring.map((feat, i) => (
						<span key={i}>
							Совместно с
							{' '}
							<a href={feat.url} target='_blank'>
								{feat.company}
							</a>
						</span>
					))}
				</Text>
			}

			<Text size='xs'>
				{project.date}
			</Text>
		</li>
	);
}

PortfolioItem.propTypes = {
	project: React.PropTypes.object,
};

export default withStyles(PortfolioItem, styles);
