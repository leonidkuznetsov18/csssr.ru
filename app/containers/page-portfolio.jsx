import React from 'react';

import PortfolioBanner from 'components/portfolio-banner';
import Portfolio from 'components/portfolio';
import Content from 'components/content';

const portfolio = require('data/portfolio.json');
const projects = require('data/projects.json');

export default class PagePortfolio extends React.Component {
	static propTypes = {
		children: React.PropTypes.element
	}

	render() {
		return (
			<div>
				<PortfolioBanner/>
				<Content>
					<Portfolio data={portfolio} projects={projects}/>
				</Content>
				{this.props.children}
			</div>
		);
	}
}
