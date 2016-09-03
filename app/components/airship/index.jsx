import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

export function Airship({ image, children }) {
	if (!image) {
		return null;
	}

	const textStyle = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div
					className={styles.text}
					style={textStyle}
				/>
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
	children: React.PropTypes.node,
	image: React.PropTypes.string,
};

export default withStyles(Airship, styles);
