import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Hole from 'components/hole';

import styles from './styles.css';

function Content({ padding, hole, children, layout }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_padding]: padding,
		[styles[`root_layout_${layout}`]]: !!layout,
	});

	return (
		<main className={blockClass}>
			{hole ? <Hole /> : ''}
			{children}
		</main>
	);
}

Content.propTypes = {
	children: React.PropTypes.node,
	hole: React.PropTypes.bool,
	layout: React.PropTypes.string,
	padding: React.PropTypes.bool,
};

Content.defaultProps = {
	padding: true,
};

export default withStyles(Content, styles);
