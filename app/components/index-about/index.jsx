import React from 'react';
import Content from 'components/content';
import Description from 'components/description';

import styles from './styles.css';

export default function IndexAbout(props) {
	return (
		<Content hole={true} padding={false}>
			<div className={styles.root}>
				<Description {...props}/>
			</div>
		</Content>
	);
}
