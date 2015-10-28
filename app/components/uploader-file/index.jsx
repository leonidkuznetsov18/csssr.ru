import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

export default function UploaderFile({name, id, progress, remove}) {
	const progressClass = cx({
		'uploader-file__progress': true,
		'uploader-file__progress_completed': progress === 100
	});

	return (
		<div className='uploader-file'>
			<span className='uploader-file__name'>
				{name}
			</span>
			<div className={progressClass}>
				<div
					className='uploader-file__progress-line'
					style={{width: `${progress}%`}}
				/>
			</div>
			<div
				className='uploader-file__remove-button'
				onClick={remove}
			/>
		</div>
	);
}

UploaderFile.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	progress: PropTypes.number.isRequired,
	remove: PropTypes.func
};
