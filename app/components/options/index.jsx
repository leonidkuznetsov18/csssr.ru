import React, {PropTypes} from 'react';
import cx from 'classnames';
import Tooltip from 'components/tooltip';

import './styles.css';

export default function Options(props) {
	const blockClass = cx({
		'options': true,
		'options_inline': props.inline,
		[props.className]: props.className
	});

	return (
		<ul {...props} className={blockClass}>
			{props.children.map((child, index) => (
				<li className='options__item' key={index}>
					{child}
				</li>
			))}
		</ul>
	);
};

Options.propTypes = {
	children: PropTypes.node,
	inline: PropTypes.bool
};

Options.defaultProps = {
	inline: false
};
