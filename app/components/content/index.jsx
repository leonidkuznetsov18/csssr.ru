import React from 'react';
import cx from 'classnames';
import Hole from 'components/hole';

import './styles.css';

export default function Content({padding, hole, children}) {
	const blockClass = cx({
		content: true,
		content_padding: padding
	});

	return (
		<main className={blockClass}>
			{hole ? <Hole/> : ''}
			{children}
		</main>
	);
};

Content.propTypes = {
	children: React.PropTypes.node,
	hole: React.PropTypes.bool,
	padding: React.PropTypes.bool
};

Content.defaultProps = {
	padding: true
};
