import React from 'react';

import './styles.css';

export default class FormUploadType extends React.Component {
	render() {
		return (
			<div className='order__main__content__upload__type'>
				<span
					id='makets'
					className={'blue-link big-blue-link' +
						(this.props.active === 'files' ? ' active' : '')}
					onClick={this.props.setActive.bind(null, 'files')}
				>макеты</span>
				<span
					className={'links blue-link big-blue-link' +
						(this.props.active === 'link' ? ' active' : '')}
					onClick={this.props.setActive.bind(null, 'link')}
				>ссылка</span>
			</div>
		);
	}
}
