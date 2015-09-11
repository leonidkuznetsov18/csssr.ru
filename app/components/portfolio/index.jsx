import React from 'react';
import PortfolioList from 'components/portfolio-list'
import Parallax from 'components/parallax'

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
					<Parallax speed={.3}>
						<div className='portfolio-slogan' />
					</Parallax>
					<Parallax speed={.2}>
						<div className='portfolio-rocket' />
					</Parallax>
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
