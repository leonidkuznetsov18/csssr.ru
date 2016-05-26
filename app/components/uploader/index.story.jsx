import React from 'react';
import Uploader from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import { action } from '@kadira/storybook';

storiesOf('Uploader')
	.add('default', () => (
		<Uploader addFiles={action('add files')} />
	));
