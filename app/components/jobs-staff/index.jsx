import React from 'react';
import Column from 'components/column';
import Row from 'components/row';
import Section from 'components/section';

import './styles.css';

const data = require('data/jobs-staff.json');

export default class JobsStaff extends React.Component {
	render() {
		return (
			<div className='jobs-staff'>
				<Row>
					{[data.slice(0, 3), data.slice(3)].map((column, index) => (
						<Column size={1 / 2} key={index}>
							{column.map((group, index) => (
								<div className='jobs-staff__section' key={index}>
									<Section { ...group } />
								</div>
							))}
						</Column>
					))}
				</Row>
			</div>
		);
	}
}
