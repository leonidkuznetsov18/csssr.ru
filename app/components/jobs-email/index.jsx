import React from 'react';

import './styles.css';

export default function JobsEmail() {
	return (
		<div className='jobs-email'>
			<span className='jobs-email__caption'>
				Служба поиска талантов CSSSR
			</span>
			<a className='jobs-email__link' href='mailto:hr@csssr.com'>
				hr@csssr.io
			</a>
		</div>
	);
}
