import React from 'react';
import TimelineItem from 'components/timeline-item';
import './styles.css';

export default function TimelineList({ data }) {
	return (
		<ul className='timeline-list'>
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
