import React from 'react';
import Helmet from 'react-helmet';

import { jobs } from 'data/meta';

export default function PageJobs({ children }) {
	return (
		<div>
			<Helmet {...jobs} />
			{children}
		</div>
	);
}

PageJobs.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};
