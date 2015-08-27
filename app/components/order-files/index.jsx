import React from 'react';

import './styles.css';

export default class FilesBlock extends React.Component {
	render() {
		return (
			<div
				id='files-block'
				className='order__main__content__upload__files'
			>
				<div id='fileHeight' className='fileHeight'>
					<div className='order__main__content__upload__line'>
						<div
							id='bar'
							className='order__main__content__upload__line-status'
						/>
					</div>
					<div
						id='pnlUploadedFiles'
						className='order__main__content__upload__uploaded-files'
					/>
				</div>
			</div>
		);
	}
}
