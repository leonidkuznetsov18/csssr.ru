import React, {PropTypes} from 'react';

import './styles.css';
import cx from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import Title from 'components/title';
import AudioButton from 'components/audio-button';
import ReactMarkdown from 'react-markdown';

function getIcon(newstaff){
	if (newstaff) return (
		<div className='timeline__icon_type_count'>
			<span className='plus'>+</span>
			<span className='count'>{newstaff.length}</span>
		</div>
	);
	return (
		<Icon className='timeline__icon_type_star' icon='timeline-star'/>
	);
}

export default function TimelineItem(props) {
	const images = props.data.images && props.data.images.map((tag,index) => (
		<img
			className='timeline__images'
			src={'http://csssr.ru/'+tag.url}
			width={tag.width}
			height={tag.height}
			key={index}
		/>
	));

	const names = props.data.newstaff && props.data.newstaff
		.map(person => person.name)
		.join(', ');

	const quote = props.data.quote && (
		 <div className='timeline__quote'>
			 <span>{props.data.quote.title}</span>
			 <p>{props.data.quote.text}</p>
		 </div>
	);


	const version = props.data.version && (
		<div className='timeline__version'>
			csssr
			<a href='#' onClick={props.goToPage('http://csssr.ru/' + props.data.version.url)}> {props.data.version.text}</a>
		</div>
	);

	const newStaffAvatars = props.data.newstaff && props.data.newstaff.map((person,index) => {

		const classList = cx({
			timeline__avatar: true,
			timeline__avatar_disabled: !person.url,
		});

		return (
			<img
				className={classList}
				src={'http://csssr.ru/' + person.avatar.src}
				alt={person.name}
				title={person.name}
				width={person.avatar.width}
				height={person.avatar.height}
				key={index}
				onClick={person.url && props.goToPage('/timeline/' + person.url)}
			/>
		);
	});

	let description;
	if (props.data.description) {
		description = <ReactMarkdown className='timeline__description' source={props.data.description}/>;
	}

	let readLink;
	if (props.data.readLink) {
		readLink = (
			<div className='timeline__readLink'>
				{props.data.readLink && (
					<Button
						component='a'
						href={props.data.readLink}
					>{props.data.buttonName}</Button>
				)}
			</div>
			);
	}

	let date;
	if(props.data.date) {
		date = (
			<div className='timeline__date'>
				{props.data.date}
			</div>
		);
	}

	const newStaff = props.data.newstaff && (
		<div className='timeline__avatars'>
			{newStaffAvatars}
		</div>
	);



	const classList = cx({
		timeline__item: true,
		'timeline__with-icon-count': props.data.newstaff,
		'timeline__with-icon-star': !props.data.newstaff
	});


	return (
		<li className={classList}>
			{date}
			<Title size='extra-small' component='h6'>
			  {names || props.data.event}
			</Title>
			{description}
			{newStaff}
			{images && <div className='timeline__images'>{images}</div>}
			{readLink}
			{version}
			{props.data.audio && <AudioButton url={props.data.audio} />}
			{quote}
			{getIcon(props.data.newstaff)}
		</li>
	);
}

TimelineItem.propTypes = {
	data: PropTypes.object.isRequired,
	goToPage: PropTypes.func
};
