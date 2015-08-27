import React from 'react';
import Uploader from 'components/order-uploader'
import Options from 'components/order-options'

export default class OrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: props.optChecked
		}
	}

	onChange(e) {
		this.setState({
			checked: e.target.checked
		})
	}

	render() {
		return (
			<li>
				<input
					id={this.props.optId}
					className='input-checkbox'
					type='checkbox'
					name='options[]'
					value={this.props.optValue}
					checked={this.state.checked}
					onChange={this.onChange.bind(this)}
				/>
				<label
					className='label checkbox'
					htmlFor={this.props.optId}
				>{this.props.optText}</label>
			</li>
		);
	}
}
