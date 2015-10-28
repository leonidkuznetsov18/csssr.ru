import React, {PropTypes} from 'react';
import cx from 'classnames';

import './styles.css';

export default function Field(props) {

	const {label, required, labelProps, inputProps, isWrong} = props;
	const id = (inputProps && inputProps.id) || Math.random().toString();
	const blockClass = cx({
		field: true,
		field_size_half: props.small,
		[props.className]: props.className
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
		<div {...props}
			className={blockClass}
		>
			<label {...labelProps}
				className={labelClass}
				htmlFor={id}
			>
				{required && '* '}
				{label}
			</label>

			<input {...inputProps}
				id={id}
				className={inputClass}
			/>
		</div>
	);
}

Field.propTypes = {
	className: PropTypes.string,
	small: PropTypes.bool,
	style: PropTypes.object,
	label: PropTypes.string,
	required: PropTypes.bool,
	inputProps: PropTypes.object,
	labelProps: PropTypes.object,
	isWrong: PropTypes.bool
};

Field.defaultProps = {
	small: false,
	required: false,
	inputProps: {},
	labelProps: {},
	isWrong: false
};
