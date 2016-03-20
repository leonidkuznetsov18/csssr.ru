import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import File from 'components/file';

import styles from './styles.css';

function Quest({ children, file, horizon }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_horizon]: horizon,
	});

	return (
		<div className={blockClass}>
			<div className={styles.file}>
				<File {...file} />
			</div>
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
	file: React.PropTypes.object.isRequired,
	horizon: React.PropTypes.bool,
};

export default withStyles(Quest, styles);
