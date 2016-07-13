import React from 'react';
import UploaderDropzone from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { action } from '@kadira/storybook';

storiesOf('UploaderDropzone')
	.add('default', () => (
		<UploaderDropzone addFiles={action('add files')} />
	));
