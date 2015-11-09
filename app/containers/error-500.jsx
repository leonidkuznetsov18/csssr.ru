import React from 'react';

import Content from 'components/content';
import Error from 'components/error';

export default class Error500 extends React.Component {

	render() {
		return (
			<Content>
				<Error number='500'/>
			</Content>
		);
	}

};
