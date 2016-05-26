import React from 'react';
import Popup from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import Text from 'components/text';
import { action } from '@kadira/storybook';

storiesOf('Popup')
	.add('default', () => (
		<Popup active onClose={action('close popup')}>
			<Text color='white'>
				Содержимое попапа
			</Text>
		</Popup>
	));
