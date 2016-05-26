import React from 'react';
import PopupVersion from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import { action } from '@kadira/storybook';

storiesOf('PopupVersion')
	.add('default', () => (
		<PopupVersion
			active
			onClose={action('close popup')}
			screenshot='csssr-size-v-1.jpg'
		/>
	));
