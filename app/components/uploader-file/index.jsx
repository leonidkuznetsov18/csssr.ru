import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function UploaderFile({ file, progress, onRemove }) {
	const progressClass = cx({
		'uploader-file__progress': true,
		'uploader-file__progress_completed': progress === 100,
	});

	return (
		<div className='uploader-file'>
			<span className='uploader-file__name'>
				{file.name}
			</span>
			<div className={progressClass}>
				<div
					className='uploader-file__progress-line'
					style={{ width: `${progress}%` }}
				/>
			</div>
			<div
				className='uploader-file__remove-button'
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
