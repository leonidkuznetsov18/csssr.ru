import React, {PropTypes} from 'react';
import {Link} from 'react-router';


import './styles.css';

export default function PopupVersion(props) {

	const img = (
		<img
			className='timeline-popup__image'
			src={`http://csssr.ru/${props.screenshot}`}
		/>
	);

	return (
		<div className='timeline-popup'>
			<Link to='/timeline'>
				<div className='timeline-popup__close' />
			</Link>
			<div className='timeline-popup__content'>
				{img}
			</div>
		</div>
	);
}
