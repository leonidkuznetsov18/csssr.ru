import React from 'react';

import './styles.css';

export default class FormGroup extends React.Component {
	render() {
		return (
			<div>

				<label
					className='label label-text'
					htmlFor={this.props._id}
				>{this.props.label}</label>

				<input
					id={this.props._id}
					className='input-text'
					type='text'
					name='contact[name]'
				/>

			</div>
		);
	}
}
