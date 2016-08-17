import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Offert from 'components/offert';
import * as meta from 'data/meta';

export default function PageOffert({ route }) {
	const { path } = route;
	const data = require(`data/${path.slice(1)}.json`);

	return (
		<Content>
			<Helmet {...meta[path]} title={data.title} />
			<Offert data={data} />
		</Content>
	);
}

PageOffert.propTypes = {
	route: React.PropTypes.object.isRequired,
};
