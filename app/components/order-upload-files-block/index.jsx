import React from 'react';
import DropPlace from 'components/order-drop-place'
import FilesBlock from 'components/order-files'

import './styles.css'

const data = require('data/order-uploader.json').files

export default class UploadFilesBlock extends React.Component {

	render() {
		return (
			<div
				id='uploadFilesBlock'
				className='order__main__content__upload__files-block'
			>
				<div className='order__main__content__upload__upload'>
					<span
						id='upload-files-button'
						className='blue-link'
					>{data.plainDownloader}</span>
					<input
						id='fileupload'
						type='file'
						name='files[]'
						data-url=''
						multiple
					/>
				</div>
				<DropPlace />
				<FilesBlock />
			</div>
		)
	}

}
