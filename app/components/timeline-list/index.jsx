import React from 'react';
import TimelineItem from 'components/timeline-item';
import './styles.css';

export default function TimelineList(props) {
	const items = props.data.map((item,index) => {
		return <TimelineItem key={index} data={item}/>;
	});

	return (
		<ul className='timeline-list'>
			{items}
		</ul>
	);
}
