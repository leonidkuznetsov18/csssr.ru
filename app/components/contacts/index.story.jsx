import React from 'react';
import Contacts from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Contacts')
	.add('default', () => (
		<Contacts active />
	));
