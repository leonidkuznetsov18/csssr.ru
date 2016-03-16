import React from 'react';
import TimelineItem from 'components/timeline-item';

import styles from './styles.css';

export default function TimelineList({ data }) {
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
