import React from 'react';
import Content from 'components/outsource-content'
import Power from 'components/outsource-power'
import Magic from 'components/outsource-magic'

import './styles.css';

const data = require('data/outsource.json');

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
				<Content data={data} />
				<Power />
				<Magic />
			</div>
		);
	}
}
