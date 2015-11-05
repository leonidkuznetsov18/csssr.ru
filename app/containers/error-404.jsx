import React from 'react';

import Content from 'components/content';
import Error from 'components/error';

export default class Error404 extends React.Component {

	render() {
		return (
			<Content>
				<Error number='404'/>
			</Content>
		);
	}
};
