import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Element as ScrollElement } from 'react-scroll';

import styles from './styles.css';

function FaqGroup({ children }) {
	return (
		<ScrollElement name='faq' className={styles.root}>
			{children}
		</ScrollElement>
	);
}

FaqGroup.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};

export default withStyles(FaqGroup, styles);
