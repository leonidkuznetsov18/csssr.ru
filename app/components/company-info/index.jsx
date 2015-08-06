import React from 'react';
import Row from 'components/row';
import Column from 'components/column';
import History from 'components/history';
import Section from 'components/section';
import Icon from 'components/icon';

import './styles.css';

const data = require('data/company-info.json');

export default class CompanyInfo extends React.Component {
	render() {
		return (
			<div className='company-info'>
				<Row>
					<Column>
						<History/>
					</Column>

					<Column size={2 / 3}>
						<Column size={1 / 2}>
							<Section {...data.name}/>
						</Column>

						<Column size={1 / 2}>
							<Section {...data.structure}/>
						</Column>

						<div className='company-info__rocket'>
							<Icon
								icon='x3'
								className='company-info__rocket-count'
							/>
							<Section {...data.count}/>
						</div>

						<Section {...data.work}/>
					</Column>
				</Row>
			</div>
		);
	}
}
