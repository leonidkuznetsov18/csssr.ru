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

FieldFile.propTypes = {
	fileAccept: React.PropTypes.string,
	value: React.PropTypes.object,
	label: React.PropTypes.string,
	required: React.PropTypes.bool,
	buttonText: React.PropTypes.string,
	invalid: React.PropTypes.bool,
	error: React.PropTypes.string,
};

FieldFile.defaultProps = {
	label: '',
	required: false,
	buttonText: 'Обзор',
	invalid: false,
	error: '',
};

export default withStyles(FieldFile, styles);
