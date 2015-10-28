import React, {PropTypes} from 'react';
import cx from 'classnames';
import File from 'components/order-file';

import './styles.css';

export default class FilesBlock extends React.Component {

	static propTypes = {
		files: PropTypes.array.isRequired,
		removeFile: PropTypes.func.isRequired
	}


	render() {
		const files = this.props.files.map(file => (
			<File
				key={file.id}
				id={file.id}
				name={file.name}
				progress={file.progress}
				remove={() => this.props.removeFile(file.id)}
			/>
		));

		const loadingFiles = this.props.files.filter(file => file.progress !== 100);
		const summaryProgress = loadingFiles.reduce((p, n) => p + n.progress, 0);
		let globalProgress = summaryProgress / loadingFiles.length;

		return (
			<div className='upload-files'>
				<div className={cx('global-progress', {
					'global-progress_hidden': !globalProgress
				})}>
					<div className='global-progress__line' style={{width: `${globalProgress}%`}} />
				</div>
				<div>
					{files}
				</div>
			</div>
		);
	}
}
