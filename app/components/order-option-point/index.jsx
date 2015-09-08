import React from 'react';
import Tooltip from 'components/tooltip'

export default class OptionPoint extends React.Component {


	onChange = (e) => {
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
		const typeData = this.getTypeData(this.props._type)

		return (
			<li className={this.props.className}>
				<input
					id={this.props._id}
					className={typeData.inputClassList}
					type={typeData.type}
					name='options[]'
					value={this.props._value}
					onChange={this.onChange}
					checked={this.props._checked}
				/>

				<label
					className={typeData.labelClassList}
					htmlFor={this.props._id}
				>{this.props.text}</label>

				{ this.props.tip ? <Tooltip text={this.props.tip} /> : '' }

			</li>
		);
	}
}
