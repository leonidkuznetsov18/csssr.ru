import React from 'react';

import './styles.css';

export default class PortfolioProject extends React.Component {
	render() {

		const logo = ((project) => {
			if (!(project.logo && project.logo.url)) return ''

			return (
				<div className='portfolio-list-item-logo'>
					<img
						src={require(`../../images/portfolio/${project.logo.url}`)}
						alt={project.name}
						width={project.logo.width}
						height={project.logo.height}
					/>
				</div>

			)
		}(this.props.data));

		const work = ((project) => {

			if (project.url) {
				return (
						<a
							className='portfolio-list-item-link blue-link'
							href={project.url}
							target='_blank'
						>{project.name}</a>
					)
			}

			if (project.view) {
				if (project.pages) {
					<a
						className='portfolio-list-item-link blue-link'
						href={'view-project.html#' + project.view}
						target='_blank'
					>{project.name}</a>

				} else {
					<a className='portfolio-list-item-link blue-link'
						href={'http://portfolio.csssr.ru/' + project.view + '/'}
						target='_blank'
					>{project.name}</a>
				}
			}

			return <span className='portfolio-list-item-text'>{project.name}</span>

		}(this.props.data));

		const featuring = ((project) => {
			if (!project.featuring) return ''
			return project.featuring.map((featuring, i) => {
				return (

					<div key={i} className='portfolio-list-item-featuring'>
						{'Совместно с '}
						{
							(featuring.url) ? (
								<a className='portfolio-list-item-company blue-link'
									href={featuring.url}
									target='_blank'
								>{featuring.company}</a>
							) : featuring.company
						}
					</div>

				)
			});
		}(this.props.data));


		return (

			<li className='portfolio-list-item'>
				{logo}
				{work}
				{featuring}
				<div className='portfolio-list-item-date'>{this.props.data.date}</div>
			</li>

		)
	}
}
