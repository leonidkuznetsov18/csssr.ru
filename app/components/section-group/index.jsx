import React from 'react';
import Section from 'components/section';

import './styles.css';

export default function SectionGroup({ data }) {
	return (
		<div className='section-group'>
			{data.map((group, index) => (
				<div className='section-group__block' key={index}>
					<Section {...group} />
				</div>
			))}
		</div>
	);
}

SectionGroup.propTypes = {
	data: React.PropTypes.array,
};
