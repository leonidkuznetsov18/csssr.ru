import React from 'react';

import Content from 'components/content';
import Error from 'components/error';

export default class Error502 extends React.Component {

	render() {
		return (
			<Content>
				<Error number='502'/>
			</Content>
		);
	}

};
