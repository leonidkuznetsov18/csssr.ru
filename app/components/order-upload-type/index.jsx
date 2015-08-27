import React from 'react';

import './styles.css';

export default class FormUploadType extends React.Component {
	render() {
		return (
			<div className='order__main__content__upload__type'>
				<span
					id='makets'
					className='blue-link big-blue-link active'
				>макеты</span>
				<span className='links blue-link big-blue-link'>ссылка</span>
			</div>
		);
	}
}
