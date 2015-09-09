import React from 'react';

import './styles.css';

const data = require('data/portfolio.json');

export default class Portfolio extends React.Component {
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
				</div>
			</div>
		);
	}
}
