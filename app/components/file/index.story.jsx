import React from 'react';
import File from './index.jsx';
import storiesOf from 'helpers/storiesOf';

storiesOf('File')
	.add('psd', () => (
		<File
			filename='anketa.psd'
			link='/files/anketa.psd'
			size='6,5 МБ'
			type='psd'
		/>
	))
	.add('zip', () => (
		<File
			filename='CSSSR Design\u00a0Kit'
			link='/files/csssr_design_kit.zip'
			size='2,16 МБ'
			type='zip'
		/>
	))
	.add('doc', () => (
		<File
			filename='CSSSR manager quest.docx'
			link='/files/csssr_manager_quest.docx'
			size='0,5 МБ'
			type='doc'
		/>
	));
