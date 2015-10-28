import React, {PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import Link from 'components/link';
import FilesBlock from 'components/order-files';
import request from 'superagent';

import './styles.css';

export default class UploadFilesBlock extends React.Component {

	static propTypes = {
		files: PropTypes.array.isRequired,
		addFiles: PropTypes.func.isRequired
	}

	onDrop = files => {
		this.props.addFiles(files);
	}


	openSelectWindow = () => {
		this.refs.dropzone.open();
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

				<FilesBlock {...this.props} />

			</div>
		);
	}

}
