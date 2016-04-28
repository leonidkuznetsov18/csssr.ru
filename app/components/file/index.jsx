import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './styles.css';

function File({ type, filename, link, size }) {
	return (
		<div className={styles.root}>
			<img src={require(`images/background/${type}.svg`)} />
			<a
				className={styles.link}
				href={link}
				target='_blank'
			>
				{filename}
			</a>
			<p className={styles.size}>
				{size}
			</p>
		</div>
	);
}

File.propTypes = {
	className: React.PropTypes.string,
	filename: React.PropTypes.string,
	link: React.PropTypes.string,
	size: React.PropTypes.string,
	type: React.PropTypes.oneOf(['doc', 'psd']).isRequired,
};

export default withStyles(File, styles);
