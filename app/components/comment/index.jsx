import React from 'react';
import Text from 'components/text';

import styles from './styles.css';

export default function Comment({ author, company, url, text }) {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<a className={styles.link} href={url} target='_blank'>
					{author}
				</a>
				, {company}
			</div>
			<Text size='xs'>
				{text}
			</Text>
		</div>
	);
}

Comment.propTypes = {
	author: React.PropTypes.string,
	company: React.PropTypes.string,
	url: React.PropTypes.string,
	text: React.PropTypes.string,
};
