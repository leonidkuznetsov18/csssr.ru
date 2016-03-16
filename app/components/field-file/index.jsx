import React, { PropTypes } from 'react';
import Field from 'components/field';

import styles from './styles.css';

export default function FieldFild(props) {
	return (
		<div className={styles.root}>
			<div className={styles.input}>
				<Field
					{...props}
					value={props.value && props.value[0] && props.value[0].name}
					disabled
				/>
			</div>

			<div className={styles.button}>
				{props.buttonText}
				<input
					{...props}
					className={styles.file}
					type='file'
					value={null}
					accept={props.fileAccept}
				/>
			</div>

			{props.invalid && props.error &&
				<div className={styles.warning}>
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
