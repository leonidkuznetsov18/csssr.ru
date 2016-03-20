import React from 'react';
import Row from 'components/row';
import Column from 'components/column';
import History from 'components/history';
import Section from 'components/section';
import Icon from 'components/icon';

import styles from './styles.css';

export default function CompanyInfo({ history, data }) {
	return (
		<div className={styles.root}>
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

					<div className={styles.rocket}>
						<span className={styles.rocketCount}>
							<Icon icon='x3' />
						</span>
						<Section {...data.count}/>
					</div>

					<Section {...data.work}/>
				</Column>
			</Row>
		</div>
	);
}

CompanyInfo.propTypes = {
	history: React.PropTypes.object.isRequired,
	data: React.PropTypes.object.isRequired,
};
