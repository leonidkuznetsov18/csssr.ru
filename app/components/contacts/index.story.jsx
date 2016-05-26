import React from 'react';
import Contacts from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('Contacts')
	.add('default', () => (
		<Contacts active />
	));
