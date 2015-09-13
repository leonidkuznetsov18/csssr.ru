import React from 'react';

import './styles.css';

export default class PortfolioProject extends React.Component {

	static propTypes = {
		data: React.PropTypes.object
	}


	render() {

		const logo = ((project) => {
			if (!(project.logo && project.logo.url)) return '';

			return (
				<div className='portfolio-list-item-logo'>
					<img
						src={require(`../../images/portfolio/${project.logo.url}`)}
						alt={project.name}
						width={project.logo.width}
						height={project.logo.height}
					/>
				</div>

			);
		}(this.props.data));

		const work = ((project) => {

			if (project.view) {
				if (project.pages) {
					return (
						<a
							className='portfolio-list-item-link blue-link'
							href={'view-project.html#' + project.view}
							target='_blank'
						>{project.name}</a>
					);

				} else {
					return (
						<a className='portfolio-list-item-link blue-link'
							href={'http://portfolio.csssr.ru/' + project.view + '/'}
							target='_blank'
						>{project.name}</a>
					);
				}
			}

			if (project.url) {
				return (
					<a
						className='portfolio-list-item-link blue-link'
						href={project.url}
						target='_blank'
					>{project.name}</a>
				);
			}

			return <span className='portfolio-list-item-text'>{project.name}</span>;

		}(this.props.data));

		const featuring = ((project) => {
			if (!project.featuring) return '';
			return project.featuring.map((feat, i) => {
				return (

					<div key={i} className='portfolio-list-item-featuring'>
						{'Совместно с '}
						{
							(feat.url) ? (
								<a className='portfolio-list-item-company blue-link'
									href={feat.url}
									target='_blank'
								>{feat.company}</a>
							) : feat.company
						}
					</div>

				);
			});
		}(this.props.data));


		return (

			<li className='portfolio-list-item'>
				{logo}
				{work}
				{featuring}
				<div className='portfolio-list-item-date'>{this.props.data.date}</div>
			</li>

		);
	}
}
