import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function Icon(props) {
	const icon = require(`images/icons/${props.icon}.svg`);

	return (
		<span
			className={styles.root}
			dangerouslySetInnerHTML={{ __html: icon }}
		/>
	);
}

Icon.propTypes = {
	icon: React.PropTypes.string,
	className: React.PropTypes.string,
};

export default withStyles(Icon, styles);
