import React from 'react';
import Title from 'components/title';
import ReactMarkdown from 'react-markdown';
import Popup from 'components/popup';

import styles from './styles.css';

function getQuote(title, text) {
	return (
		<blockquote className={styles.quote}>
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
				className={styles.root}
				onClick={(event) => event.stopPropagation()}
			>
				<div className={styles.staff}>
					<img
						className={styles.avatar}
						src={require(`images/timeline/avatar/${props.avatar}.jpg`)}
						alt={props.name}
						title={props.name}
					/>
					<div className={styles.name}>
						{props.name}
					</div>
					<div className={styles.city}>
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
	avatar: React.PropTypes.string,
	active: React.PropTypes.bool,
	onClose: React.PropTypes.func,
};
