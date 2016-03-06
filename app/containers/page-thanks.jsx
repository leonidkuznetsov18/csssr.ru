import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Thanks from 'components/thanks';
import { thanks } from 'data/meta';

export default class ThanksContainer extends React.Component {
	static propTypes = {
		location: React.PropTypes.object,
	}

	render() {
		return (
			<Content>
				<Helmet {...thanks} />
				<Thanks />
			</Content>
		);
	}
}
