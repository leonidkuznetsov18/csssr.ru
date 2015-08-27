import React from 'react';

export default class OrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: props._checked
		}
	}

	onChange(e) {
		this.props.choose(e);
	}


	getTypeData(type) {
		switch (type) {
			case 'radio':
				return {
					inputClassList: 'input-radio',
					type: 'radio',
					labelClassList: 'label radio'
				}

			default: // по умолчанию checkboxes
				return {
					inputClassList: 'input-checkbox',
					type: 'checkbox',
					labelClassList: 'label checkbox'
				}
		}
	}

	render() {
		const typeData = this.getTypeData(this.props.type)

		return (
			<li>
				<input
					id={this.props._id}
					className={typeData.inputClassList}
					type={typeData.type}
					name='options[]'
					value={this.props._value}
					onChange={this.onChange.bind(this)}
					checked={this.state.checked}
				/>
				<label
					className={typeData.labelClassList}
					htmlFor={this.props._id}
				>{this.props.text}</label>
			</li>
		);
	}
}
