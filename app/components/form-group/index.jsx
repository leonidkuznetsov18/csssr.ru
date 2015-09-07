import React from 'react';

import './styles.css';

export default class FormGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}


	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}


	render() {
		const err = { border: '1px solid rgb(199, 38, 26)' };
		let withErr = false;

		if (this.props.validate && this.props.regexp) {
			let re = new RegExp(this.props.regexp);
			withErr = !re.test(this.state.value);
		}

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
					style={withErr ? err : {}}
					value={this.state.value}
					onChange={this.onChange}
				/>

			</div>
		);
	}
}
