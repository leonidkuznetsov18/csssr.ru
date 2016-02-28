import React from 'react';
import cx from 'classnames';

import Icon from 'components/icon';

import './styles.css';

export default function Button(props) {
	const Component = props.component;
	const blockClass = cx({
		button: true,
		button_type_form: props.mod === 'form',
		button_type_social: props.mod === 'social',
	});

	return (
		<Component {...props} className={blockClass}>
			<span className='button__inner'>
				{props.icon &&
					<Icon className='button__icon' icon={props.icon} />
				}
				{props.children}
			</span>
			<span className='button__shadow' />
		</Component>
	);
}

Button.propTypes = {
	children: React.PropTypes.node,
	component: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
	]),
	mod: React.PropTypes.string,
	icon: React.PropTypes.string,
};

Button.defaultProps = {
	component: 'button',
};
