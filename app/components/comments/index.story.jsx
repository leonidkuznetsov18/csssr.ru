import React from 'react';
import Comments from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const dataComments = require('data/comments.json');

storiesOf('Comments')
	.add('default', () => (
		<div
			style={{
				paddingLeft: 150,
				position: 'relative',
			}}
		>
			<Comments data={dataComments} />
		</div>
	));
