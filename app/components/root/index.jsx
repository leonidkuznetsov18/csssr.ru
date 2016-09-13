import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from 'styles/base.css';

function Root({ children }) {
	return React.Children.only(children);
}

Root.propTypes = {
	children: React.PropTypes.element.isRequired,
};

export default withStyles(Root, styles);
