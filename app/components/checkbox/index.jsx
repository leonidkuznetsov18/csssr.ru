import React from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import './styles.css';

export default function Checkbox(props) {
	const blockClass = cx({
		'checkbox': true,
		[props.className]: props.className
	});
	return (
		<div {...props} id={null} name={null} onChange={null} className={blockClass}>
			<input
				className='checkbox__input'
				id={props.id}
				type='checkbox'
				checked={props.checked}
				readOnly={props.readOnly}
				onChange={props.onChange}
			/>
			<label
				className='checkbox__label'
				htmlFor={props.id}
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

Checkbox.propTypes = {
	children: React.PropTypes.node,
	tip: React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		link: React.PropTypes.string
	}),
	checked: React.PropTypes.bool
};

Checkbox.defaultProps = {
	checked: false
};
