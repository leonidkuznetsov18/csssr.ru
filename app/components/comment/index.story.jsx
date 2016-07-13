import React from 'react';
import Comment from './index.jsx';
import storiesOf from 'utils/storiesOf';

const dataComments = require('data/comments.json');

dataComments.forEach((comment, index) =>
	storiesOf('Comment')
		.add(index, () => (
			<Comment {...comment} />
		))
);
