import React from 'react';
import Section from 'components/section';

import './styles.css';

const data = require('data/company-about.json');

export default class CompanyAbout extends React.Component {
	render() {
		return (
			<div className='company-about'>
				{data.map(group => (
					<div className='company-about__group'>
						<Section {...group} />
					</div>
				))};
			</div>
		);
	}
}
