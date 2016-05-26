import React from 'react';
import Header from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import { action } from '@kadira/storybook';

storiesOf('Header')
	.add('default', () => (
		<Header open={action('open sidebar')} />
	));
