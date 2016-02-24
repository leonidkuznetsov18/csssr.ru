import React from 'react';
import spliter from 'helpers/spliter';
import Field from 'components/field';
import { getSelection } from 'react/lib/ReactInputSelection';

const phoneCodes = {
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
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
	}

	static defaultProps = {
		value: '',
	}

	componentWillMount() {
		this.setState({
			focused: false,
			position: null,
		});
	}

	onFocus = () => {
		this.setState({
			focused: true,
		});
	}

	onBlur = () => {
		this.setState({
			focused: false,
			position: null,
		});
	}

	onChange = (event) => {
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
		return (
			<Field
				{...this.props}
				position={this.state.position}
				value={this.formatValue(this.props.value)}
				onChange={this.onChange}
				onFocus={this.onFocus}
				onBlur={this.onBlur}
			/>
		);
	}
}
