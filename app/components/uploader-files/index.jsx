import React from 'react';
import cx from 'classnames';
import File from 'components/uploader-file';

import './styles.css';

export default function UploaderFiles({files, removeFile}) {
	const loadingFiles = files.filter(file => file.progress !== 100);
	const summaryProgress = loadingFiles.reduce((p, n) => p + n.progress, 0);
	const globalProgress = summaryProgress / loadingFiles.length;
	const progressClass = cx({
		'uploader-files__progress': true,
		'uploader-files__progress_hidden': !globalProgress
	});

	return (
		<div className='uploader-files'>
			<div className={progressClass}>
				<div
					className='uploader-files__line'
					style={{width: `${globalProgress}%`}}
				/>
			</div>
			<div>
				{files.map(file => (
					<File
						key={file.id}
						id={file.id}
						name={file.name}
						progress={file.progress}
						remove={() => removeFile(file.id)}
					/>
				))}
			</div>
		</div>
	);
}

UploaderFiles.propTypes = {
	files: React.PropTypes.array.isRequired,
	removeFile: React.PropTypes.func.isRequired
};
