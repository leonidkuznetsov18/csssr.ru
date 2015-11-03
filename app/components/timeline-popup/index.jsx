import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import cx from 'classnames';

import './styles.css';

function getQuote(title, text) {
	 return (
		<blockquote className='timeline-popup__quote'>
			<span>{title}</span>
			<div>{text}</div>
		</blockquote>
	);
}

export default function TimelinePopup(props) {

	const avatar = (
		<img
			className='timeline-popup__avatar'
			src={'http://csssr.ru/' + props.avatar.src}
			alt={props.name}
			title={props.name}
		/>
	);

	const history = props.histories && getQuote('История связанная с CSSSR', props.histories);

	const wishes = props.wishes && getQuote('Пожелания CSSSR', props.wishes);

	const popupClass = cx({
			'timeline-popup': true,
			'timeline-popup_active': props.active
		});

	return (
		<div className={popupClass}>
			<div  className='timeline-popup__close' onClick={props.onClose}/>
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


TimelinePopup.propTypes = {
	city: PropTypes.string,
	onClose: PropTypes.func,
	data: PropTypes.object
};
