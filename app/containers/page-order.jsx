import React from 'react';
import Helmet from 'react-helmet';

import { order } from 'data/meta';

export default function PageCompany({ children }) {
	return (
		<div>
			<Helmet {...order} />
			{children}
		</div>
	);
}

PageCompany.propTypes = {
	children: React.PropTypes.node,
};
