import React from 'react';
import File from 'components/order-file'

import './styles.css';

export default class FilesBlock extends React.Component {
	render() {
		const files = this.props.files.map((file) => {
			return (
				<File
					key={file.key}
					data={file}
					delete={this.props.deleteFile}
				/>
			);
		});

		return (
			<div
				id='files-block'
				className='order__main__content__upload__files'
				style={{
					paddingTop: 50,
					height: 100
				}}
			>
				<div id='fileHeight' className='fileHeight'>
					<div
						id='progress'
						className='order__main__content__upload__line'
						style={{display: 'block'}}
					>
						<div
							id='bar'
							className='order__main__content__upload__line-status'
							style={{width: '30%'}}
						/>
					</div>
					<div
						id='pnlUploadedFiles'
						className='order__main__content__upload__uploaded-files'
					>
						{files}
					</div>
				</div>
			</div>
		);
	}
}
