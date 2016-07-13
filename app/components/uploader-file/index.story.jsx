import React from 'react';
import UploaderFile from './index.jsx';
import storiesOf from 'utils/storiesOf';

const creatFile = (id, name, progress) => ({
	file: {
		name,
	},
	progress,
	id,
});

storiesOf('UploaderFile')
	.add('zero-progress', () => (
		<UploaderFile {...creatFile(0, 'Файл', 0)} />
	))
	.add('some-progress', () => (
		<UploaderFile {...creatFile(0, 'Файл', 50)} />
	))
	.add('complete-progress', () => (
		<UploaderFile {...creatFile(0, 'Файл', 100)} />
	));
