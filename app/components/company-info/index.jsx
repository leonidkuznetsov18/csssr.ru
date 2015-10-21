import React from 'react';
import Row from 'components/row';
import Column from 'components/column';
import History from 'components/history';
import Section from 'components/section';
import Icon from 'components/icon';

import './styles.css';

export default function CompanyInfo({history, data}) {
	return (
		<div className='company-info'>
			<Row>
				<Column>
					<History data={history}/>
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
};

CompanyInfo.propTypes = {
	history: React.PropTypes.object.isRequired,
	data: React.PropTypes.object.isRequired,
};

