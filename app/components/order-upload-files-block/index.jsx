import React from 'react';
import Dropzone from 'react-dropzone';
import FilesBlock from 'components/order-files';
import request from 'superagent';

import './styles.css';

const data = require('data/order-uploader.json').files;

export default class UploadFilesBlock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
	}


	progressUpdater = i => ({percent}) => {
		const updatedFiles = this.state.files.map((file, index) => {
			if (index === i) {
				file.progress = percent;
			}
			return file;
		});
		this.setState(updatedFiles);
	}


	loadErrorHandler = err => {
		if (err) {
			// TODO: delete file from state and show error here
			console.log(err);
		}
	}

	onDrop = (files) => {
		const newFiles = files.map((file) => {
			file.key = Math.random();
			file.progress = 0;
			return file;
		}).concat(this.state.files);

		for (let i = 0, l = newFiles.length; i < l; i++) {
			const formData = new FormData();
			formData.append('file', newFiles[i]);
			request
				.post('/upload')
				.send(formData)
				.on('progress', this.progressUpdater(i))
				.end(this.loadErrorHandler);
		}

		this.setState({
			files: newFiles
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
