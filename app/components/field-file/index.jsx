import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Field from 'components/field';

import styles from './styles.css';

function FieldFile(props) {
	return (
		<div className={styles.root}>
			<div className={styles.input}>
				<Field
					{...props}
					disabled
					value={props.value && props.value[0] && props.value[0].name}
				/>
			</div>

			<div className={styles.button}>
				{props.buttonText}
				<input
					{...props}
					accept={props.fileAccept}
					className={styles.file}
					type='file'
					value={null}
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

FieldFile.propTypes = {
	buttonText: React.PropTypes.string,
	error: React.PropTypes.string,
	fileAccept: React.PropTypes.string,
	invalid: React.PropTypes.bool,
	label: React.PropTypes.string,
	required: React.PropTypes.bool,
	value: React.PropTypes.object,
};

FieldFile.defaultProps = {
	label: '',
	required: false,
	buttonText: 'Обзор',
	invalid: false,
	error: '',
};

export default withStyles(FieldFile, styles);
