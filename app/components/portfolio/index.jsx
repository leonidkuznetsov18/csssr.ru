import React from 'react';
import PortfolioList from 'components/portfolio-list'

import './styles.css';

const data = require('data/portfolio.json');

export default class Portfolio extends React.Component {

	componentDidMount() {
		document.title = data.pageTitle;
	}


	render() {
		return (
			<div className='portfolio'>
				<div className='portfolio-head'>
					<div className='portfolio-slogan' />
					<div className='portfolio-rocket' />
				</div>
				<div className='portfolio-main'>
					<div className='portfolio-title'>{data.title}</div>
					<div className='portfolio-desc'>
						{data.info}
					</div>
					<PortfolioList data={data.list} />
				</div>
			</div>
		);
	}
}
