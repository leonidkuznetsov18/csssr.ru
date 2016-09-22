import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import File from 'components/file';

import styles from './styles.css';

function Quest({ children, file }) {
	return (
		<div className={styles.root}>
			{!!file && <div className={styles.file}>
				<File {...file} />
			</div>}
			<img
				className={styles.scissors}
				src={require('images/background/cut.svg')}
			/>
			{children}
		</div>
	);
}

Quest.propTypes = {
	children: React.PropTypes.node.isRequired,
	file: React.PropTypes.object,
};

export default withStyles(Quest, styles);
