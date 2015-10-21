import React from 'react';
import PortfolioItem from 'components/portfolio-item';

import './styles.css';

export default class PortfolioList extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired
	}

	render() {
		return (
			<ul className='portfolio-list'>
				{this.props.data.map((project, i) => (
					<PortfolioItem
						key={i}
						data={project}
					/>
				))}
			</ul>
		);
	}
}
