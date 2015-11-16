import React from 'react';
import Title from 'components/title';
import ReactMarkdown from 'react-markdown';
import Popup from 'components/popup';

import './styles.css';

function getQuote(title, text) {
	return (
		<blockquote className='timeline-popup__quote'>
			<Title size='small' component='h6' color='yellow'>
				{title}
			</Title>
			<ReactMarkdown source={text}/>
		</blockquote>
	);
}

export default function TimelinePopup(props) {
	return (
		<Popup active={props.active} onClose={props.onClose} >
			<div
				className='timeline-popup__blockquote'
				onClick={(event) => event.stopPropagation()}
			>
				<div className='timeline-popup__staff'>
					<img
						className='timeline-popup__avatar'
						src={`http://csssr.ru/${props.avatar.src}`}
						alt={props.name}
						title={props.name}
					/>
					<div className='timeline-popup__name'>
						{props.name}
					</div>
					<div className='timeline-popup__city'>
						{props.city}
					</div>
				</div>

				{props.histories &&
					getQuote('История связанная с CSSSR', props.histories)
				}

				{props.wishes &&
					getQuote('Пожелания CSSSR', props.wishes)
				}
			</div>
		</Popup>
	);
}

TimelinePopup.propTypes = {
	city: React.PropTypes.string,
	data: React.PropTypes.object,
	name: React.PropTypes.string,
	histories: React.PropTypes.string,
	wishes: React.PropTypes.string,
	avatar: React.PropTypes.object,
	active: React.PropTypes.bool,
	onClose: React.PropTypes.func,
};
