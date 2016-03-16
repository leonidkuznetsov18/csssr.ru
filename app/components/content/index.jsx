import React from 'react';
import cx from 'classnames';
import Hole from 'components/hole';

import styles from './styles.css';

export default function Content({ padding, hole, children, layout }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_padding]: padding,
		[styles.root_layout_job]: layout === 'job',
	});

	return (
		<main className={blockClass}>
			{hole ? <Hole/> : ''}
			{children}
		</main>
	);
}

Content.propTypes = {
	children: React.PropTypes.node,
	hole: React.PropTypes.bool,
	padding: React.PropTypes.bool,
	layout: React.PropTypes.string,
};

Content.defaultProps = {
	padding: true,
};
