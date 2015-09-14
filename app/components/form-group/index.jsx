import React from 'react';

import './styles.css';

export default class FormGroup extends React.Component {

	static propTypes = {
		optId: React.PropTypes.string.isRequired,
		optName: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired,
		regexp: React.PropTypes.string,
		validate: React.PropTypes.bool
	}


	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}


	validate = (str) => {
		const re = new RegExp(this.props.regexp);
		if (this.props.regexp) {
			return re.test(str);
		} else {
			return true;
		}
	}


	isRight = () => {
		return this.validate(this.state.value);
	}


	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}


	render() {
		const err = { border: '1px solid rgb(199, 38, 26)' };

		const label = (!this.props.label) ? '' : (
			<label
				className='label label-text'
				htmlFor={this.props.optId}
			>{this.props.label}</label>
		);

		return (
			<div>
				{label}

				<input
					id={this.props.optId}
					className='input-text'
					type='text'
					name={'contact[' + this.props.optName + ']'}
					style={(!this.props.validate || this.isRight()) ? {} : err}
					value={this.state.value}
					onChange={this.onChange}
				/>

			</div>
		);
	}
}
