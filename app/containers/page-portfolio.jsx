import React from 'react';
import Helmet from 'react-helmet';

import PortfolioBanner from 'components/portfolio-banner';
import Portfolio from 'components/portfolio';
import Content from 'components/content';
import { portfolio } from 'data/meta';

const portfolioData = require('data/portfolio.json');
const projects = require('data/projects.json');

export default class PagePortfolio extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
	}

	render() {
		return (
			<div>
				<Helmet {...portfolio} />
				<PortfolioBanner/>
				<Content>
					<Portfolio data={portfolioData} projects={projects}/>
				</Content>
				{this.props.children}
			</div>
		);
	}
}
