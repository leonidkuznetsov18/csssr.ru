import React from 'react';

import './styles.css';

export default function JobBanner() {
	return (
		<img
			className='job-banner'
			src={require('images/background/work.svg')}
		/>
	);
};
