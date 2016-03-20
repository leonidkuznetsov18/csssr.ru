import React from 'react';

import styles from './styles.css';

export default function Icon(props) {
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
