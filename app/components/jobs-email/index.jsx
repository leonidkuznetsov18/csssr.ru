import React from 'react';

import './styles.css';

export default class JobsEmail extends React.Component {
	render() {
		return (
			<div className='jobs-email'>
				<span className='jobs-email__caption'>
					Служба поиска талантов CSSSR
				</span>
				<a className='jobs-email__link' href='mailto:hr@csssr.com'>
					hr@csssr.com
				</a>
			</div>
		);
	}
}
