import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function TinkoffInput({ accept, type = 'text', label, id, short = false, error, value, ...rest }) {
	const isFile = type === 'file';

	const inputClasses = cx({
		[styles.root]: true,
		[styles.root_error]: error,
		[styles.root_short]: short,
		[styles.root_file]: isFile,
	});

	if (isFile && value && value[0] && value[0].name) {
		label = value[0].name;
	}

	return (
		<div className={inputClasses}>
			<input
				accept={accept}
				className={styles.input}
				id={id}
				type={type}
				value={isFile ? void 0 : value}
				{...rest}
			/>
			<label
				className={styles.label}
				htmlFor={id}
			>
				{label}
			</label>
			{error ?
				<label
					className={styles.error}
					htmlFor={id}
				>
					{error}
				</label> :
				null
			}
		</div>
	);
}

TinkoffInput.propTypes = {
	accept: React.PropTypes.string,
	error: React.PropTypes.any,
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	short: React.PropTypes.bool,
	type: React.PropTypes.string,
	value: React.PropTypes.any,
};

export default withStyles(TinkoffInput, styles);
