import React from 'react';

import OutsourceProject from 'components/outsource-project';

export default function OutsourceProjects({ partners }) {
	return (
		<div>
			{partners.map((partner, index) => (
				<OutsourceProject key={index} partner={partner} />
			))}
		</div>
	);
}

OutsourceProjects.propTypes = {
	partners: React.PropTypes.array.isRequired,
};
