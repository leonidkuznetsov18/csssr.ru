import React from 'react';
import Menu from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import { action } from '@kadira/storybook';

storiesOf('Menu')
	.add('default', () => (
		<Menu open={action('open sidebar')} />
	));
