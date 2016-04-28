import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Content from 'components/content';
import Description from 'components/description';

import styles from './styles.css';

function IndexAbout(props) {
	return (
		<Content hole padding={false}>
			<div className={styles.root}>
				<Description {...props} />
			</div>
		</Content>
	);
}

export default withStyles(IndexAbout, styles);
