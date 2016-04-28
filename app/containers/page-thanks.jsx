import React from 'react';
import Helmet from 'react-helmet';

import Content from 'components/content';
import Thanks from 'components/thanks';
import { thanks } from 'data/meta';

export default function ThanksContainer() {
	return (
		<Content>
			<Helmet {...thanks} />
			<Thanks />
		</Content>
	);
}
