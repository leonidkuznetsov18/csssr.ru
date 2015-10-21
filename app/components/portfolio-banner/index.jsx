import React from 'react';

import Parallax from 'components/parallax';

import './styles.css';

export default function PortfolioBanner() {
	return (
		<div className='portfolio-banner'>
			<Parallax speed={.3}>
				<div className='portfolio-banner__slogan' />
			</Parallax>
			<Parallax speed={.2}>
				<div className='portfolio-banner__rocket' />
			</Parallax>
		</div>
	);
}
