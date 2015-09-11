import React from 'react';
import Content from 'components/outsource-content'
import Power from 'components/outsource-power'
import Magic from 'components/outsource-magic'
import Use from 'components/outsource-use'
import Form from 'components/outsource-form'
import Faq from 'components/outsource-faq'

import './styles.css';

const data = require('data/outsource.json');

export default class Outsource extends React.Component {

	componentDidMount() {
		document.title = 'CSSSR — фронтенд аутсорсинг. Что угодно с помощью HTML, CSS, JavaScript.'
	}


	render() {
		return (
			<div>
				<div className='outsource'>
					<h1 className='outsource__title'>
						<span className='outsource__title-left'>Frontend</span>
						<span className='outsource__title-right'>аутсорсинг</span>
					</h1>
					<Content data={data} />
					<Power />
					<Magic />
					<Use tips={data.tips} />
					<Form data={data.form} />
				</div>
				<Faq data={data.faq} />
			</div>
		);
	}
}
