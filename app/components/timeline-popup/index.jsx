import React from 'react';


import './styles.css';

export default function TimelinePopup(props) {

	const avatar = (
		<img
			className='timeline-popup__avatar'
			src={'http://csssr.ru/' + props.avatar.src}
			alt={props.name}
			title={props.name}
		/>
	);

	const history = props.histories && (
		<blockquote className='timeline-popup__quote'>
			<span>История связанная с CSSSR</span>
			<div className='timeline-popup__history'>{props.histories}</div>
		</blockquote>
	);

	const wishes = props.wishes && (
		<blockquote className='timeline-popup__quote'>
			<span>Пожелания CSSSR</span>
			<div className='timeline-popup__wishes'>{props.wishes}</div>
		</blockquote>
	);

	return (
		<div className='timeline-popup'>
			<div
				className='timeline-popup__close'
				onClick={props.goToPage('/timeline')}
			></div>
			<div className='timeline-popup__content'>
				<div className='timeline-popup__blockquote'>
					<div className='timeline-popup__staff'>
						{avatar}
						<div className='timeline-popup__name'>{props.name}</div>
						<div className='timeline-popup__city'>{props.city}</div>
					</div>
					{history}
					{wishes}
				</div>
			</div>
		</div>
	);
}
