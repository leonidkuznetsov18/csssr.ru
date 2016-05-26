import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import File from 'components/uploader-file';

import styles from './styles.css';

function UploaderFiles({ files, removeFile }) {
	const loadingFiles = files.filter((file) => file.progress !== 100);
	const summaryProgress = loadingFiles.reduce((p, n) => p + n.progress, 0);
	const globalProgress = summaryProgress / loadingFiles.length;
	const progressClass = cx({
		[styles.progress]: true,
		[styles.progress_hidden]: !loadingFiles.length || globalProgress === 100,
	});
	const handleRemoveFile = (file) => () => removeFile(file.id);

	return (
		<div className={styles.root}>
			<div className={progressClass}>
				<div
					className={styles.line}
					style={{ width: `${globalProgress}%` }}
				/>
			</div>
			<div>
				{files.map((file) => (
					<File
						key={file.id}
						{...file}
						onRemove={handleRemoveFile(file)}
					/>
				))}
			</div>
		</div>
	);
}

UploaderFiles.defaultProps = {
	files: [],
};

UploaderFiles.propTypes = {
	files: React.PropTypes.array.isRequired,
	removeFile: React.PropTypes.func.isRequired,
};

export default withStyles(UploaderFiles, styles);
