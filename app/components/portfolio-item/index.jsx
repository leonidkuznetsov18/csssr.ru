import React from 'react';
import Text from 'components/text';

import './styles.css';

export default class PortfolioProject extends React.Component {
	static propTypes = {
		data: React.PropTypes.object
	}

	render() {
		const logo = ((project) => {
			if (!(project.logo && project.logo.url)) {
				return '';
			}

			return (
				<div className='portfolio-item__logo'>
					<img
						src={require(`../../images/portfolio/${project.logo.url}`)}
						className='portfolio-item__image'
						alt={project.name}
						width={project.logo.width}
						height={project.logo.height}
					/>
				</div>
			);
		}(this.props.data));

		const work = ((project) => {
			if (project.view && project.pages) {
				return (
					<a href={'view-project.html#' + project.view} >
						{project.name}
					</a>
				);
			}

			if (project.url || project.view) {
				let link = project.url || 'http://portfolio.csssr.ru/' + project.view + '/';

				return (
					<a href={link} target='_blank'>
						{project.name}
					</a>
				);
			}

			return project.name;
		}(this.props.data));

		const featuring = ((project) => {
			if (!project.featuring) {
				return '';
			}

			return project.featuring.map((feat, i) => (
				<span key={i}>
					Совместно с
					{' '}
					{
						(feat.url) ? (
							<a href={feat.url} target='_blank'>
								{feat.company}
							</a>
						) : feat.company
					}
				</span>
			));
		}(this.props.data));

		return (
			<li className='portfolio-item'>
				{logo}

				<Text size='m' indent={false}>
					{work}
				</Text>

				<Text size='xxs' indent={false}>
					{featuring}
				</Text>

				<Text size='xs'>
					{this.props.data.date}
				</Text>
			</li>
		);
	}
}
