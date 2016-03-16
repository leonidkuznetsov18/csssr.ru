import React from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function UploaderFile({ file, progress, onRemove }) {
	const progressClass = cx({
		[styles.progress]: true,
		[styles.progress_completed]: progress === 100,
	});

	return (
		<div className='root'>
			<span className={styles.name}>
				{file.name}
			</span>
			<div className={progressClass}>
				<div
					className={styles.progressLine}
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
	progress: React.PropTypes.number.isRequired,
	onRemove: React.PropTypes.func,
};
