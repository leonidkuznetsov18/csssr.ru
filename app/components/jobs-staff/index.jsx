import React from 'react';

import Column from 'components/column';
import Row from 'components/row';
import Section from 'components/section';

export default function JobsStaff({ data }) {
	return (
		<Row inner>
			{[data.slice(0, 3), data.slice(3)].map((column, index) => (
				<Column size={1 / 2} key={index}>
					{column.map((group, groupIndex) => (
						<Section {...group} indent={true} key={groupIndex}/>
					))}
				</Column>
			))}
		</Row>
	);
}

JobsStaff.propTypes = {
	data: React.PropTypes.array.isRequired,
};
