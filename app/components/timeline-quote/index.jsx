import React from 'react';
import ReactMarkdown from 'react-markdown';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Title from 'components/title';

import styles from './styles.css';

function TimelineQuoute({ title, text }) {
	return (
		<blockquote className={styles.root}>
			<Title
				color='yellow'
				component='h6'
				size='small'
			>
				{title}
			</Title>
			<ReactMarkdown source={text} />
		</blockquote>
	);
}

TimelineQuoute.propTypes = {
	text: React.PropTypes.string,
	title: React.PropTypes.string,
};

export default withStyles(TimelineQuoute, styles);
