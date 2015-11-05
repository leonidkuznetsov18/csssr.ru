import React, {PropTypes} from 'react';
import Field from 'components/field';
import cx from 'classnames';

import './styles.css';

export default function FieldFild(props) {
	return (
		<div className='field-file'>
			<Field
				{...props}
				className='field-file__input'
				inputProps={{...props.inputProps, disabled: true}}
				isWrong={props.isWrong}
			/>

			<div className='field-file__button'>
				{props.buttonText}
				<input
					className='field-file__file'
					accept={props.accept}
					onChange={props.onChange}
					type='file'
				/>
			</div>

			{props.isWrong &&
				<div className='field-file__warning'>{props.warning}</div>
			}
		</div>
	);
}

FieldFild.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	required: PropTypes.bool,
	inputProps: PropTypes.object,
	labelProps: PropTypes.object,
	buttonText: PropTypes.string,
	accept: PropTypes.string,
	isWrong: PropTypes.bool,
	warning: PropTypes.string,
	onChange: PropTypes.func
}

FieldFild.defaultProps = {
	required: false,
	inputProps: {},
	labelProps: {},
	buttonText: 'Обзор',
	accept: '',
	isWrong: false
}