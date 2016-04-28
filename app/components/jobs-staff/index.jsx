import React from 'react';

import Column from 'components/column';
import Row from 'components/row';
import Section from 'components/section';

export default function JobsStaff({ data }) {
	return (
		<Row inner>
			{[data.slice(0, 3), data.slice(3)].map((column, index) => (
				<Column key={index} size={1 / 2}>
					{column.map((group, groupIndex) => (
						<Section
							{...group}
							indent
							key={groupIndex}
						/>
					))}
				</Column>
			))}
		</Row>
	);
}

JobsStaff.propTypes = {
	data: React.PropTypes.array.isRequired,
};
