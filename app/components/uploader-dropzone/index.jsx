import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import Link from 'components/link';

import './styles.css';

export default class UploadFilesBlock extends React.Component {
	static propTypes = {
		addFiles: PropTypes.func.isRequired,
	}

	onDrop = (files) => {
		this.props.addFiles(files);
	}

	openSelectWindow = () => {
		this.refs.dropzone.open();
	}

	render() {
		return (
			<div>
				<Dropzone
					className='uploader-dropzone'
					activeClassName='uploader-dropzone_active'
					ref='dropzone'
					onDrop={this.onDrop}
				>
					<div className='uploader-dropzone__background'>
						<div className='uploader-dropzone__text'>
							Перетащите файлы проекта сюда
						</div>
					</div>
				</Dropzone>

				<Link size='small' onClick={this.openSelectWindow} underline>
					Обычный загрузчик
				</Link>
			</div>
		);
	}

}
