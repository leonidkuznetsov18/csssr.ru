import React from 'react';

export default function Icon(props) {
	const icon = require(`images/icons/${props.icon}.svg`);

	return (
		<span {...props}
			dangerouslySetInnerHTML={{__html: icon}}
		/>
	);
};

Icon.propTypes = {
	icon: React.PropTypes.string
};
