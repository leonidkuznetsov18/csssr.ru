import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Error from 'components/error';

export default function PageError({ location }) {
	let errorCode = parseInt(location.pathname.slice(1), 10);
	errorCode = [403, 404, 500, 502].indexOf(errorCode) === -1 ? 404 : errorCode;

	return (
		<Content>
			<Helmet title={`CSSSR - ${errorCode}`} />
			<Error number={errorCode} />
		</Content>
	);
}

PageError.propTypes = {
	location: React.PropTypes.object.isRequired,
};
