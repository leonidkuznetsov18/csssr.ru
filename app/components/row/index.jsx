import React from 'react';

import './styles.css';

export default function Row(props) {
	return (
		<div {...props} className='row'>
			{props.children}
		</div>
	);
};

Row.propTypes = {
	children: React.PropTypes.node
};
