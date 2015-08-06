import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

const data = require('data/company-about.json');

export default class CompanyAbout extends React.Component {
	render() {
		return (
			<div className='company-about'>
				{data.map(group => (
					<div className='company-about__group'>
						<Title {...group.title.props}>
							{group.title.text}
						</Title>
						{[].concat(group.description).map(paragraph => (
							<Text {...paragraph.props}>
								{paragraph.text}
							</Text>
						))}
					</div>
				))};
			</div>
		);
	}
}
