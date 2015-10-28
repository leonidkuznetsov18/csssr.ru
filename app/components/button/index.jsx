import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Button(props){
	const Component = props.component;
	const blockClass = cx({
		button: true,
		button_type_form: props.mod === 'form'
	});

	return (
		<Component {...props} className={blockClass}>
			<span className='button__inner'>
				{props.children}
			</span>
			<span className='button__shadow' />
		</Component>
	);
}

Button.propTypes = {
	children: React.PropTypes.node
};

Button.defaultProps = {
	component: 'button'
};
