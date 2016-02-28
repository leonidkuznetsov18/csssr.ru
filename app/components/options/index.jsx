import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Options(props) {
	const blockClass = cx({
		options: true,
		options_inline: props.inline,
		[props.className]: props.className,
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
}

Options.propTypes = {
	className: React.PropTypes.string,
	children: React.PropTypes.node,
	inline: React.PropTypes.bool,
};

Options.defaultProps = {
	inline: false,
};
