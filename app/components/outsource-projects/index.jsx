import React from 'react';
import OutsourceProject from 'components/outsource-project';

export default function OutsourceProjects({ projects }) {
	return (
		<div>
			{projects.map((partner, index) => (
				<OutsourceProject partner={partner} key={index} />
			))}
		</div>
	);
}

OutsourceProjects.propTypes = {
	projects: React.PropTypes.array.isRequired,
};
