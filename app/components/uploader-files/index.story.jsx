import React from 'react';
import UploaderFiles from './index.jsx';
import storiesOf from 'utils/storiesOf';

const creatFile = (id, name, progress) => ({
	file: {
		name,
	},
	progress,
	id,
});

storiesOf('UploaderFiles')
	.add('zero-progress', () => (
		<UploaderFiles
			files={[
				creatFile(0, 'Файл', 0),
				creatFile(1, 'Еще один файл', 0),
			]}
		/>
	))
	.add('some-progress', () => (
		<UploaderFiles
			files={[
				creatFile(0, 'Файл', 25),
				creatFile(1, 'Еще один файл', 15),
			]}
		/>
	))
	.add('complete-progress', () => (
		<UploaderFiles
			files={[
				creatFile(0, 'Файл', 100),
				creatFile(1, 'Еще один файл', 100),
			]}
		/>
	));
