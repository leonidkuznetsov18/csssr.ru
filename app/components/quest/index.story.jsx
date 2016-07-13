import React from 'react';
import Quest from './index.jsx';
import storiesOf from 'utils/storiesOf';

const dataList = {
	'pixel-perfectionist': require('data/jobs/pixel-perfectionist.json'),
	'technical-manager': require('data/jobs/technical-manager.json'),
	'hr-manager': require('data/jobs/hr-manager.json'),
	'ui-ux-designer': require('data/jobs/ui-ux-designer.json'),
};

Object.keys(dataList).forEach((job) =>
	storiesOf('Quest')
		.add(job, () => (
			<div
				style={{
					paddingLeft: 170,
				}}
			>
				<Quest file={dataList[job].file}>
					Описание квеста
				</Quest>
			</div>
		))
);
