import React from 'react';

import './styles.css';

const dropzoneMessage = require('data/order-uploader.json').files.dropzoneMessage

export default class DropPlace extends React.Component {
	render() {
		return (
			<div
				id='drop_place'
				className='order__main__content__upload__drop-place'
			>
				<div className='order-drop-place__bg'>
					<div className='order-drop-place__text'>
						{dropzoneMessage}
					</div>
				</div>
			</div>
		);
	}
}
