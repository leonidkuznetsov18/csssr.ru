import React from 'react';
import Helmet from 'react-helmet';

import { outsource } from 'data/meta';

export default function Outsource({ children }) {
	return (
		<div>
			<Helmet {...outsource} />
			{children}
		</div>
	);
}

Outsource.propTypes = {
	children: React.PropTypes.element,
};
