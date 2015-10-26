import React from 'react';

import TimelineItem from 'components/timeline-item';
import './styles.css';

export default function TimelineList(props) {
	var items = props.data.map(function(item,index){
		return <TimelineItem key={index} data={item}/>
	});
	return (
		<ul className='timeline__items'>
			{items}
		</ul>
	);
}
