import React, { PropTypes } from 'react';
import Field from 'components/field';

import './styles.css';

export default function FieldFild(props) {
	return (
		<div className='field-file'>
			<div className='field-file__input'>
				<Field
					{...props}
					value={props.value && props.value[0] && props.value[0].name}
					disabled
				/>
			</div>

			<div className='field-file__button'>
				{props.buttonText}
				<input
					{...props}
					className='field-file__file'
					type='file'
					value={null}
					accept={props.fileAccept}
				/>
			</div>

			{props.invalid && props.error &&
				<div className='field-file__warning'>
					{props.error}
				</div>
			}
		</div>
	);
}

FieldFild.propTypes = {
	fileAccept: PropTypes.string,
	value: PropTypes.object,
	label: PropTypes.string,
	required: PropTypes.bool,
	buttonText: PropTypes.string,
	invalid: PropTypes.bool,
	error: PropTypes.string,
};

FieldFild.defaultProps = {
	label: '',
	required: false,
	buttonText: 'Обзор',
	invalid: false,
	error: '',
};
