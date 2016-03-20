import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TimelineItem from 'components/timeline-item';

import styles from './styles.css';

function TimelineList({ data }) {
	return (
		<ul className={styles.root}>
			{data.map((item, index) => {
				return (
					<TimelineItem key={index} data={item} />
				);
			})}
		</ul>
	);
}

TimelineList.propTypes = {
	data: React.PropTypes.array,
};

export default withStyles(TimelineList, styles);
