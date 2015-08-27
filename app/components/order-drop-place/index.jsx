import React from 'react';

import './styles.css';

export default class DropPlace extends React.Component {
	render() {
		return (
			<div
				id='drop_place'
				className='order__main__content__upload__drop-place'
			>
				<div className='order-drop-place__bg'>
					<div className='order-drop-place__text'>
						Перетащите файлы проекта сюда
					</div>
				</div>
			</div>
		);
	}
}
