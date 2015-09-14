import React from 'react';

import './styles.css';


export default class FormValidation extends React.Component {

	static propTypes = {
		show: React.PropTypes.bool
	}

	render() {
		return (

			<div
				id='form-validation'
				className='form-validation magictime form-valid-opened rotateRight'
				style={{display: this.props.show ? '' : 'none'}}
			>
				<div className='form-validation__attention'>секундочку!</div>
				<div
					id='valid-lines-one'
					className='form-validation__makets validation-lines'
				>Прикрепите макеты страниц или укажите ссылку для скачивания</div>
			</div>

		);
	}
}
