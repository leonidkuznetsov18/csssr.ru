import React, {PropTypes} from 'react';
import './styles.css';
import cx from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import Title from 'components/title';
import Text from 'components/text';
import AudioButton from 'components/audio-button';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router';

function getIcon(newstaff){
	if (newstaff) return (
		<div className='timeline-item__icon-count'>
				{newstaff.length}
		</div>
	);
	return (
		<Icon className='timeline-item__icon-star' icon='timeline-star'/>
	);
}

export default function TimelineItem(props) {
	const images = props.data.images && props.data.images.map((tag,index) => (
		<img
			className='timeline-item__images'
			src={'http://csssr.ru/' + tag.url}
			width={tag.width}
			height={tag.height}
			key={index}
		/>
	));

	const names = props.data.newstaff && props.data.newstaff
		.map(person => person.name)
		.join(', ');

	const quote = props.data.quote && (
		<div className='timeline-item__quote'>
			<Title size='small' color='black' component='h6'>{props.data.quote.title}</Title>
			<Text>{props.data.quote.text}</Text>
		</div>
	);

	const version = props.data.version && (
		<div className='timeline-item__version'>
			csssr&nbsp;
			<Link to={`/timeline/version/${props.data.version.number}`}>
				{props.data.version.text}
			</Link>
		</div>
	);

	const newStaffAvatars = props.data.newstaff && props.data.newstaff.map((person,index) => {

		const classList = cx ({
			'timeline-item__avatar': true,
			'timeline-item__avatar_disabled': !person.url
		});

		const img = (
			<img
				className={classList}
				src={'http://csssr.ru/' + person.avatar.src}
				alt={person.name}
				title={person.name}
				width={person.avatar.width}
				height={person.avatar.height}
				key={index}
			/>
		);

		if (person.url) return (
			<Link className='timeline-item__link' key={index} to={`/timeline/${person.url}`}>
				{img}
			</Link>
		);
		return <Link className='timeline-item__link' to={'/timeline'} key={index}>{img}</Link>;
	});

	let description;
	if (props.data.description) {
		description = <ReactMarkdown className='timeline-item__description' source={props.data.description}/>;
	}

	let readLink;
	if (props.data.readLink) {
		readLink = (
			<div className='timeline-item__readLink'>
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
	if (props.data.date) {
		date = (
			<div className='timeline-item__date'>
				{props.data.date}
			</div>
		);
	}

	const newStaff = props.data.newstaff && (
		<div className='timeline-item__avatars'>
			{newStaffAvatars}
		</div>
	);

	const classList = cx ({
		'timeline-item': true,
		'timeline-item_with-icon-count': props.data.newstaff,
		'timeline-item_with-icon-star': !props.data.newstaff
	});

	return (
		<li className={classList}>
			{date}
			<div className='timeline-item__title'>
				<Title size='small' component='h6'>
					{names || props.data.event}
				</Title>
			</div>
			{description}
			{newStaff}
			{images && <div className='timeline-item__images'>{images}</div>}
			{readLink}
			{version}
			{props.data.audio && <AudioButton url={props.data.audio} />}
			{quote}
			{getIcon(props.data.newstaff)}
		</li>
	);
}

TimelineItem.propTypes = {
	data: PropTypes.object.isRequired
};