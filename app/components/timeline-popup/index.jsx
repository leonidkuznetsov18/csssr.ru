import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import cx from 'classnames';
import Title from 'components/title';
import ReactMarkdown from 'react-markdown';
import Popup from 'components/popup';

import './styles.css';

function getQuote(title, text) {
	 return (
		<blockquote className='timeline-popup__quote'>
			<Title size='small' component='h6' color='yellow'>{title}</Title>
			<ReactMarkdown source={text}/>
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

	return (
		<Popup active={props.active} onClose={props.onClose} >
			<div className='timeline-popup__blockquote'>
				<div className='timeline-popup__staff'>
				{avatar}
					<div className='timeline-popup__name'>{props.name}</div>
					<div className='timeline-popup__city'>{props.city}</div>
				</div>
				{history}
				{wishes}
			</div>
		</Popup>
	);
}


TimelinePopup.propTypes = {
	city: PropTypes.string,
	data: PropTypes.object
};
