import React from 'react';
import Helmet from 'react-helmet';

import Offert from 'components/offert';
import * as meta from 'data/meta';

export default function PageOffert({ route }) {
	const { path } = route;
	const data = require(`data/${path.slice(1)}.json`);

	return (
		<Offert data={data}>
			<Helmet {...meta[path]} />
		</Offert>
	);
}

PageOffert.propTypes = {
	route: React.PropTypes.object.isRequired,
};
