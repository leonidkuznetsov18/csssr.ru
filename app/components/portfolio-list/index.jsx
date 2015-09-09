import React from 'react';
import Project from 'components/portfolio-project';

import './styles.css';

export default class PortfolioList extends React.Component {
	render() {
		const projects = this.props.data.map((project, i) => {
			return (
				<Project
					key={i}
					data={project}
				/>
			)
		});

		return (
			<ul className='portfolio-list'>
				{projects}
			</ul>
		);
	}
}
