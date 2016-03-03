import React from 'react';
import Text from 'components/text';
// import { Link } from 'react-router';

import './styles.css';

export default function PortfolioItem({ project }) {
	let work = project.name;

	if (project.view && project.pages) {
		work = (
			<a
				target='_blank'
				href={`/portfolio/${project.view}/${project.pages[0].page}`}
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
		<li className='portfolio-item'>
			{project.logo &&
				<div className='portfolio-item__logo'>
					<img
						src={require(`../../images/portfolio/${project.logo.url}`)}
						className='portfolio-item__image'
						alt={project.name}
						width={project.logo.width}
						height={project.logo.height}
					/>
				</div>
			}

			<Text size='m' indent={false}>
				{work}
			</Text>

			{project.featuring &&
				<Text size='xxs' indent={false}>
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
