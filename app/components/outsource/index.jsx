import React from 'react';

import './styles.css';

export default class Outsource extends React.Component {

	componentDidMount() {
		document.title = 'CSSSR — фронтенд аутсорсинг. Что угодно с помощью HTML, CSS, JavaScript.'
	}


	render() {
		return (
			<div className='outsource'>
				<h1 className='outsource__title'>
					<span className='outsource__title-left'>Frontend</span>
					<span className='outsource__title-right'>аутсорсинг</span>
				</h1>
			</div>
		);
	}
}
