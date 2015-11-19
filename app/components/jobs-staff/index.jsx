import React from 'react';
import Column from 'components/column';
import Row from 'components/row';
import Section from 'components/section';

export default function JobsStaff({data}) {
	return (
		<Row innex>
			{[data.slice(0, 3), data.slice(3)].map((column, index) => (
				<Column size={1 / 2} key={index}>
					{column.map((group, index) => (
						<Section {...group} indent={true} key={index}/>
					))}
				</Column>
			))}
		</Row>
	);
}

JobsStaff.propTypes = {
	data: React.PropTypes.array.isRequired
};
