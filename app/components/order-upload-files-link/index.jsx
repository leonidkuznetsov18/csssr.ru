import React from 'react';
import Title from 'components/title';

import './styles.css'

const data = require('data/order-uploader.json').link;

export default class UploadFilesLink extends React.Component {

	render() {
		return (
			<div className='order__main__content__upload__link'>
				<span className='title'>{data.title}</span>
				<input
					id='filelink'
					className='input-text'
					type='text'
					name='link'
				/>
				<span className='info'>{data.info}</span>
			</div>
		)
	}

}
