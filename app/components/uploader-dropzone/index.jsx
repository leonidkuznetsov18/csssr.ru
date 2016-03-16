import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import Link from 'components/link';

import styles from './styles.css';

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
					className={styles.root}
					activeClassName={styles.root_active}
					ref='dropzone'
					onDrop={this.onDrop}
				>
					<div className={styles.background}>
						<div className={styles.text}>
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
