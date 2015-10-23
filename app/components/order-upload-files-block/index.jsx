import React, {PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import Link from 'components/link';
import FilesBlock from 'components/order-files';
import request from 'superagent';

import './styles.css';

export default class UploadFilesBlock extends React.Component {

	static propTypes = {
		files: PropTypes.array.isRequired
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
			<div className='upload-block'>

				<Dropzone
					className='drop-place'
					activeClassName='drop-place_active'
					ref='dropzone'
					onDrop={this.onDrop}
				>
					<div className='drop-place__bg'>
						<div className='drop-place__text'>
							Перетащите файлы проекта сюда
						</div>
					</div>
				</Dropzone>

				<Link size='small' onClick={this.openSelectWindow} underline>
					Обычный загрузчик
				</Link>

				{true ? null : <FilesBlock
					files={this.state.files}
					deleteFile={this.deleteFile}
				/>}
			</div>
		);
	}

}
