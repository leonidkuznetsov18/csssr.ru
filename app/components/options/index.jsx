import React, {PropTypes} from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import './styles.css';

/* Usage:

	import {Option, Options} from 'component/options';

	<Options>
		<Option>option 1</Option>
		<Option>option 2</Option>
	</Options>

*/

export function Option(props) {
	const classList = cx('option', props.className);
	const id = Math.random();
	const passedProps = {...props};
	passedProps.onChange = undefined;

	const tip = props.tip ? <Tooltip text={props.tip.text}>{props.tip.link}</Tooltip> : null;

	return (
		<li {...passedProps} className={classList}>
			<input
				className='option__input'
				id={id}
				type={props.type}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<label
				className='option__label'
				htmlFor={id}
			>
				{props.children}
			</label>
			{' '}
			{tip}
		</li>
	);
};

Option.propTypes = {
	children: PropTypes.node,
	tip: PropTypes.shape({
		text: PropTypes.string.isRequired,
		link: PropTypes.string
	}),
	checked: PropTypes.bool
};

Option.defaultProps = {
	checked: false
};



export function Options(props) {
	const classList = cx('options', props.className, {
		'options_type_checkbox': props.type === 'checkbox',
		'options_type_radio': props.type === 'radio',
		'options_inline': props.inline
	});
	return (
		<ul {...props} className={classList}>
			{props.children.map((child, i) => React.cloneElement(child, {key: props.key || i, type: props.type}))}
		</ul>
	);
};

Options.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(['checkbox', 'radio']),
	inline: PropTypes.bool
};

Options.defaultProps = {
	type: 'checkbox',
	inline: false
};
