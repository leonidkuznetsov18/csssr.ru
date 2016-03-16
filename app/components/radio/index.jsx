import React from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import styles from './styles.css';

export default function Radio(props) {
	const blockClass = cx({
		[styles.root]: true,
		[props.className]: props.className,
	});

	const inputProps = { ...props };
	delete inputProps.children;

	return (
		<div className={blockClass}>
			<input
				className={styles.input}
				type='radio'
				{...inputProps}
			/>
			<label
				className={styles.label}
				htmlFor={props.id}
			>
				{props.children}
			</label>
			{' '}
			{props.tip &&
				<Tooltip text={props.tip.text}>
					{props.tip.link}
				</Tooltip>
			}
		</div>
	);
}

Radio.propTypes = {
	id: React.PropTypes.string,
	className: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	children: React.PropTypes.node,
	tip: React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		link: React.PropTypes.string,
	}),
	checked: React.PropTypes.bool,
};

Radio.defaultProps = {
	checked: false,
};
