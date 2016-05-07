import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function UploaderFile({ file, progress, onRemove }) {
	const progressClass = cx({
		[styles.progress]: true,
		[styles.progress_completed]: progress === 100,
	});

	return (
		<div className={styles.root}>
			<span className={styles.name}>
				{file.name}
			</span>
			<div className={progressClass}>
				<div
					className={styles.line}
					style={{ width: `${progress}%` }}
				/>
			</div>
			<div
				className={styles.remove}
				onClick={onRemove}
			/>
		</div>
	);
}

UploaderFile.propTypes = {
	file: React.PropTypes.object.isRequired,
	onRemove: React.PropTypes.func,
	progress: React.PropTypes.number.isRequired,
};

export default withStyles(UploaderFile, styles);
