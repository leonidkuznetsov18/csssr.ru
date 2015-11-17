import React from 'react';
import cx from 'classnames';
import {setSelection} from 'react/lib/ReactInputSelection';

import './styles.css';

export default class Field extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		small: React.PropTypes.bool,
		style: React.PropTypes.object,
		label: React.PropTypes.string,
		required: React.PropTypes.bool,
		inputProps: React.PropTypes.object,
		labelProps: React.PropTypes.object,
		isWrong: React.PropTypes.bool,
		position: React.PropTypes.number,
	};

	static defaultProps = {
		small: false,
		required: false,
		inputProps: {},
		labelProps: {},
		isWrong: false,
	};

	componentDidUpdate() {
		if (this.props.position) {
			setSelection(this.refs.input, {
				start: this.props.position,
				end: this.props.position,
			});
		}
	}

	render() {
		const {props} = this;
		const {label, required, labelProps, inputProps, isWrong} = props;
		const id = (inputProps && inputProps.id) || Math.random().toString();
		const blockClass = cx({
			field: true,
			field_size_half: props.small,
			[props.className]: props.className,
		});
		const labelClass = cx({
			field__label: true,
			[inputProps.className]: inputProps.className,
		});
		const inputClass = cx({
			field__input: true,
			field__input_error: isWrong,
			[inputProps.className]: inputProps.className,
		});

		return (
			<div {...this.props}
				className={blockClass}
			>
				<label {...labelProps}
					className={labelClass}
					htmlFor={id}
				>
					{required && '* '}
					{label}
				</label>

				<input ref='input' {...inputProps}
					id={id}
					className={inputClass}
				/>
			</div>
		);
	}
}
