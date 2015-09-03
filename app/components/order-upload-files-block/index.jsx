import React from 'react';
import Dropzone from 'react-dropzone'
import FilesBlock from 'components/order-files'

import './styles.css'

const data = require('data/order-uploader.json').files

export default class UploadFilesBlock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
	}


	onDrop = (files) => {
		files = files.map((file) => {
			file.key = Math.random();
			return file;
		});

		this.setState({
			files: this.state.files.concat(files)
		});
	}


	openSelectWindow = () => {
		this.refs.dropzone.open();
	}


	deleteFile = (fileKey) => {
		this.setState({
			files: this.state.files.filter((file) => file.key !== fileKey)
		});
	}


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
						onClick={this.openSelectWindow}
					>{data.plainDownloader}</span>
				</div>

				<Dropzone
					id='drop_place'
					className='order__main__content__upload__drop-place'
					activeClassName='hover' /* TODO: test this */
					ref='dropzone'
					onDrop={this.onDrop}
				>
					<div className='order-drop-place__bg'>
						<div className='order-drop-place__text'>
							{data.dropzoneMessage}
						</div>
					</div>
				</Dropzone>

				<FilesBlock
					files={this.state.files}
					deleteFile={this.deleteFile}
				/>
			</div>
		);
	}

}
