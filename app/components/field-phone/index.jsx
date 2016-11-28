import React from 'react';

import spliter from 'utils/spliter';
import Field from '../field';
import { getSelection } from 'react-dom/lib/ReactInputSelection';

const phoneCodes = {
	1: [2, 3, 3, 2, 2],
	7: [2, 3, 3, 2, 2],
	380: [4, 2, 3, 2, 2],
	373: [4, 4, 4],
	375: [4, 2, 3, 2, 2],
	76: [3, 2, 3, 2, 2],
	77: [3, 2, 3, 2, 2],
	996: [4, 3, 3, 3],
	995: [4, 3, 3, 3],
};

export default class FieldPhone extends React.Component {
	static propTypes = {
		component: React.PropTypes.oneOfType([
			React.PropTypes.element,
			React.PropTypes.func,
		]),
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
	}

	static defaultProps = {
		value: '',
		onChange: () => {},
	}

	componentWillMount() {
		this.setState({
			focused: false,
			position: null,
			value: this.props.value,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value,
		});
	}

	handleFocus = () => {
		this.setState({
			focused: true,
		});
	}

	handleBlur = () => {
		this.setState({
			focused: false,
			position: null,
		});
	}

	handleChange = (event) => {
		let value = event.target.value.replace(/\D/g, '');

		const isPartOfCode = Object.keys(phoneCodes).some((code) => {
			const minLength = Math.min(code.length, value.length);
			return value.slice(0, minLength) === code.slice(0, minLength);
		});

		if (!isPartOfCode) {
			value = value.slice(0, value.length - 1);
		}

		value = `+${value}`;

		const lengthDiff = this.formatValue(value).length - event.target.value.length;

		this.setState({
			position: getSelection(event.target).start + lengthDiff,
			value,
		});

		this.props.onChange(value);

		return value;
	}

	formatValue(value = '') {
		Object.keys(phoneCodes).forEach((code) => {
			if (value.slice(1, 1 + code.length) === code) {
				const phoneCode = phoneCodes[code];
				const phoneLength = phoneCode.reduce((a, b) => a + b, 0);

				value = value.slice(0, phoneLength);
				value = spliter(value, phoneCode);
			}
		});

		return value;
	}

	render() {
		const Phone = this.props.component || Field;

		return (
			<Phone
				{...this.props}
				onBlur={this.handleBlur}
				onChange={this.handleChange}
				onFocus={this.handleFocus}
				position={this.state.position}
				value={this.formatValue(this.state.value)}
			/>
		);
	}
}
