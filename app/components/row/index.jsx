import React from 'react';

import './styles.css';

export default function Row({children}) {
	return (
		<div className='row'>
			{children}
		</div>
	);
};

Row.propTypes = {
	children: React.PropTypes.node
};
