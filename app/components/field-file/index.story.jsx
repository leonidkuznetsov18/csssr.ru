import React from 'react';
import FieldFile from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { linkTo } from '@kadira/storybook';

storiesOf('FieldFile')
	.add('default', () => (
		<div
			style={{
				width: '50%',
			}}
		>
			<FieldFile
				fileAccept='zip'
				label='Поле файла'
				onChange={linkTo('FieldFile', 'with file')}
				required
			/>
		</div>
	))
	.add('with file', () => (
		<div
			style={{
				width: '50%',
			}}
		>
			<FieldFile
				fileAccept='zip'
				label='Поле файла'
				required
				value={[{ name: 'Имя файла' }]}
			/>
		</div>
	))
	.add('invalid', () => (
		<div
			style={{
				width: '50%',
			}}
		>
			<FieldFile
				error='Ошибка поля с файлом'
				fileAccept='zip'
				invalid

				label='Поле файла'
				required
			/>
		</div>
	));
