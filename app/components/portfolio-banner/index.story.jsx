import React from 'react';
import PortfolioBanner from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('PortfolioBanner')
	.add('default', () => (
		<div
			style={{
				paddingTop: 140,
			}}
		>
			<PortfolioBanner />
		</div>
	));
