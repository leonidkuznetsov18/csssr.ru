import React from 'react';
import Helmet from 'react-helmet';

import { job } from 'data/meta';

export default function PageJob({ routeParams, children }) {
	const page = routeParams.jobName;

	return (
		<div>
			<Helmet {...job[page]} />
			{children}
		</div>
	);
}

PageJob.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	routeParams: React.PropTypes.object,
};
