import React from 'react';
import spliter from 'helpers/spliter';
import Field from 'components/field';

export default class FieldPhone extends React.Component {
	componentWillMount() {
		this.setState({
			focused: false
		})
	}

	onFocus = () => {
		this.setState({
			focused: true
		})
	}

	onBlur = () => {
		this.setState({
			focused: false
		})
	}

	onChange = (event) => {
		let value = event.target.value
			.replace(/\D/g, '')
			.replace(/^8$/, '7')
			.replace(/^[^379]$/, '')
			.replace(/^9[^9]/, '9')
			.replace(/^99[^5]/, '99')
			.slice(0, 12);

		if (value[0] === '7') {
			value = value.slice(0, 11);
		}

		this.props.inputProps.onChange(`+${value}`)

		return `+${value}`;
	}

	formatValue(value) {
		if (this.state.focused) {
			return value;
		}

		switch (value[1]) {
		case '3':
			return spliter(value, [4, 2, 3, 2, 2]);
		case '7':
			return spliter(value, [2, 3, 3, 2, 2]);
		case '9':
			return spliter(value, [4, 3, 3, 3]);
		default:
			return value;
		}
	}

	render() {
		return (
			<Field
				{...this.props}
				inputProps={{
					value: this.formatValue(this.props.inputProps.value),
					onChange: this.onChange,
					onFocus: this.onFocus,
					onBlur: this.onBlur
				}}
			/>
		)
	}
}