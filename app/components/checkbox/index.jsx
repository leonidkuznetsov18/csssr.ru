import React from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import styles from './styles.css';

export default function Checkbox(props) {
	const blockClass = cx({
		[styles.root]: true,
		[props.className]: props.className,
	});
	const inputProps = { ...props };
	delete inputProps.children;

	return (
		<div className={blockClass}>
			<input
				{...inputProps}
				className={styles.input}
				type='checkbox'
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

Checkbox.propTypes = {
	children: React.PropTypes.node,
	id: React.PropTypes.string,
	className: React.PropTypes.string,
	tip: React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		link: React.PropTypes.string,
	}),
	checked: React.PropTypes.bool,
};

Checkbox.defaultProps = {
	checked: false,
};
