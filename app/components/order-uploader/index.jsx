import React from 'react';
import FormUploadType from 'components/order-upload-type'
import DropPlace from 'components/order-drop-place'
import FilesBlock from 'components/order-files'

import './styles.css';

export default class OrderForm extends React.Component {
	render() {
		return (
			<div className='order__main__content__upload'>
				<FormUploadType />
				<div
					id='uploadFilesBlock'
					className='order__main__content__upload__files-block active'
				>
					<div className='order__main__content__upload__upload'>
						<span
							id='upload-files-button'
							className='blue-link'
						>Обычный загрузчик</span>
						<input
							id='fileupload'
							type='file'
							name='files[]'
							data-url=''
							multiple
						/>

						<DropPlace />
						<FilesBlock />

					</div>
				</div>
			</div>
		);
	}
}
