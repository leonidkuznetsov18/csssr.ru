import React from 'react';
import MenuItem from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('MenuItem')
	.add('default', () => (
		<div
			style={{
				width: 100,
				position: 'relative',
			}}
		>
			<MenuItem>
				Текст
			</MenuItem>
		</div>
	));
