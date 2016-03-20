import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function Airship({ image, children }) {
	const imageUrl = require(`../../images/background/${image}`);
	const textStyle = {
		backgroundImage: `url(${imageUrl})`,
	};

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div className={styles.text} style={textStyle}/>
			</div>
			{children &&
				<div className={styles.content}>
					{children}
				</div>
			}
		</div>
	);
}

Airship.propTypes = {
	image: React.PropTypes.string,
	children: React.PropTypes.element,
};

export default withStyles(Airship, styles);
