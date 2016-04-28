import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Dropzone from 'react-dropzone';
import Link from 'components/link';

import styles from './styles.css';

class UploadFilesBlock extends React.Component {
	static propTypes = {
		addFiles: React.PropTypes.func.isRequired,
	}

	handleDrop = (files) => {
		this.props.addFiles(files);
	}

	handleSelectWindow = () => {
		this.refs.dropzone.open();
	}

	render() {
		return (
			<div>
				<Dropzone
					activeClassName={styles.root_active}
					className={styles.root}
					onDrop={this.handleDrop}
					ref='dropzone'
				>
					<div className={styles.background}>
						<div className={styles.text}>
							Перетащите файлы проекта сюда
						</div>
					</div>
				</Dropzone>

				<Link
					onClick={this.handleSelectWindow}
					size='small'
					underline
				>
					Обычный загрузчик
				</Link>
			</div>
		);
	}
}

export default withStyles(UploadFilesBlock, styles);
