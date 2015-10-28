import React from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import './styles.css';

export default function Radio(props) {
	const blockClass = cx({
		'radio': true,
		[props.className]: props.className
	});
	const id = Math.random();

	return (
		<div {...props} onChange={null} className={blockClass}>
			<input
				className='radio__input'
				id={id}
				type='radio'
				name={props.name}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<label
				className='radio__label'
				htmlFor={id}
			>
				{props.children}
			</label>
			{' '}
			{props.tip &&
				<Tooltip text={props.tip.text}>{props.tip.link}</Tooltip>
			}
		</div>
	);
};

Radio.propTypes = {
	children: React.PropTypes.node,
	tip: React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		link: React.PropTypes.string
	}),
	checked: React.PropTypes.bool
};

Radio.defaultProps = {
	checked: false
};
